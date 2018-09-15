import { Routes, RouterModule } from '@angular/router';


import { PagesComponent } from 'src/app/pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PAGES_ROUTES: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'DashBoard'} },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Progreso'} },
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas'} },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema'} },
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    }
];

export const PAGESROUTING = RouterModule.forChild(PAGES_ROUTES);
