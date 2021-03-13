//@ts-check
const { chromium } = require('playwright-webkit');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)
const DEBUG = false;

const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    ideas: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    create: '/data/ideas',
    details: '/data/ideas/',
    delete: '/data/ideas/'
};


function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

let browser;
let context;
let page;

describe('E2E tests', function () {
    if (DEBUG) {
        this.timeout(120000);
    } else {
        this.timeout(6000);
    }

    before(async () => {
        if (DEBUG) {
            browser = await chromium.launch({ headless: false, slowMo: 500 });
        } else {
            browser = await chromium.launch();
        }
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();

        // Block external calls
        /*
        await context.route(url => url.href.slice(0, host.length) != host, route => {
            if (DEBUG) {
                console.log('aborting', route.request().url());
            }
            route.abort();
        });
        */

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    describe('Catalog', () => {
        it('show most recent ideas', async () => {
            await page.goto(host);
            await page.click('text=Dashboard');
            await page.waitForSelector('#dashboard-holder');

            const titles = await page.$$eval('#dashboard-holder .card.overflow-hidden.current-card.details p.card-text', t => t.map(s => s.textContent));
            expect(titles.length).to.equal(3);
            expect(titles[0]).to.contains('111111');
            expect(titles[1]).to.contains('222222');
            expect(titles[2]).to.contains('333333');
        });

        it('show idea details', async () => {
            await page.goto(host);
            await page.click('text=Dashboard');
            await page.waitForSelector('#dashboard-holder');
            await page.click('div.card:has-text("111111") >> text=Details');

            const title = await page.textContent('h2');
            const desc = await page.textContent('p.idea-description');
            const img = await page.getAttribute('img.det-img', 'src');
        });

        it('guest does NOT see delete button', async () => {
            await page.goto(host);
            await page.click('text=Dashboard');
            await page.waitForSelector('#dashboard-holder');
            await page.click('div.card:has-text("111111") >> text=Details');
            await page.waitForSelector('h2:has-text("111111")');

            const btn = await page.$$('text=Delete');
            expect(btn.length).to.equal(0);
        });
    });
});
