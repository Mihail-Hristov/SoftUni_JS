import page from '../node_modules/page/page.mjs';

import { loginPage } from '../vews/login.js';
import { registerPage } from '../vews/register.js';
import { createPage } from '../vews/create.js';
import { dashboardPage } from '../vews/dashboard.js';
import { detailsPage } from '../vews/details.js';
import { editPage } from '../vews/edit.js';
import { myFurniturePage } from '../vews/myFurnituer.js';
import { catalogPage } from '../vews/catalog.js'

page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create/', createPage);
page('/dashboard', dashboardPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myFurniture', myFurniturePage);
page('/catalog', catalogPage)

page.start();