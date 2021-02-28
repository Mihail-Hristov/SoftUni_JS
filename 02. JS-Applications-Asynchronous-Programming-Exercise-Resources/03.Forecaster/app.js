async function attachEvents() {
    let getBtn = document.getElementById('submit');
    let currentFor = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    let forecast = document.getElementById('forecast');

    getBtn.addEventListener('click', async () => {
        let inputtedLocation = document.getElementById('location').value;
        let currentConditions;
        let upcoming;

        try {
            let url = 'http://localhost:3030/jsonstore/forecaster/locations';
            let data = await getData(url);
            let currentCity;;

            for (const city of data) {
                if (inputtedLocation === city.name) {
                    currentCity = city.code;
                    break;
                }
            }

            let urlCurrent = `http://localhost:3030/jsonstore/forecaster/today/${currentCity}`;
            let urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${currentCity}`;

            currentConditions = await getData(urlCurrent);
            upcoming = await getData(urlUpcoming);

        } catch {
            currentFor.firstElementChild.textContent = 'Error';
            document.getElementById('current').lastChild.remove();
            document.getElementById('upcoming').lastChild.remove();
            forecast.style.removeProperty('display');
            return;
        }

        createCurrentDiv(currentConditions);
        createUpcoming(upcoming);


        document.getElementById('location').value = '';
    });

    async function getData(url) {
        let response = await fetch(url);
        let data = await response.json();

        return data;
    }

    function createCurrentDiv(data) {
        currentFor.firstElementChild.textContent = 'Current conditions';
        currentFor.lastChild.remove();
        let spanCity = createEl('span', data.name, 'forecast-data');
        let spanTemp = createEl('span', `${data.forecast.low}${symbols.Degrees}/${data.forecast.high}${symbols.Degrees}`, 'forecast-data');
        let spanW = createEl('span', data.forecast.condition, 'forecast-data');

        let spanCond = createEl('span', undefined, 'condition');
        spanCond.appendChild(spanCity);
        spanCond.appendChild(spanTemp);
        spanCond.appendChild(spanW);

        let symb = data.forecast.condition

        let spanSymbol = createEl('span', symbols[symb], 'condition symbol');

        let div = createEl('div', undefined, 'forecasts');

        div.appendChild(spanSymbol);
        div.appendChild(spanCond);

        currentFor.appendChild(div);
        forecast.style.removeProperty('display');
    }

    function createUpcoming(data) {
        upcoming.firstElementChild.textContent = 'Three-day forecast';
        upcoming.lastChild.remove();
        let div = createEl('div', undefined, 'forecast-info');

        for (const item of data.forecast) {
            let span = createEl('span', undefined, 'upcoming');
            let spanSymbol = createEl('span', symbols[item.condition], 'symbol');
            let spanTemp = createEl('span', `${item.low}${symbols.Degrees}/${item.high}${symbols.Degrees}`, 'forecast-data');
            let spanW = createEl('span', item.condition, 'forecast-data');
            span.appendChild(spanSymbol);
            span.appendChild(spanTemp);
            span.appendChild(spanW);
            div.appendChild(span);
        }

        upcoming.appendChild(div);

    }

    function createEl(type, text, style) {
        let element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        if (style) {
            element.className = style;
        }

        return element;
    }

    let symbols = {
        Sunny: '☀',
        'Partly sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°',
    }

}

attachEvents();