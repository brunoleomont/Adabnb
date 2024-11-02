import { Routes } from '@angular/router';
import { HomeCardDetailComponent } from './home-card-detail/home-card-detail.component';

export const routes: Routes = [
    {
        path: 'home-detail/:id', component: HomeCardDetailComponent
    }
];
