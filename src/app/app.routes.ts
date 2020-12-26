import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ejercicio1', component: Ejercicio1Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
