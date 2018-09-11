import { Routes, RouterModule } from '@angular/router';


import { PagesComponent } from 'src/app/pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const PAGES_ROUTES: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    }
];

export const PAGESROUTING = RouterModule.forChild(PAGES_ROUTES);
