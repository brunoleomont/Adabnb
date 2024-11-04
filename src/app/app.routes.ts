import { Routes } from '@angular/router';
import { HomeCardDetailComponent } from './home-card-detail/home-card-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home-detail/:id', component: HomeCardDetailComponent
    }
];
