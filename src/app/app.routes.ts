import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BMIPageComponent } from './bmi-page/bmi-page.component';

export const routes: Routes = [
    {
        path:'' ,component:LandingPageComponent
    },
    {
        path:"register" , component:RegisterComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'dashboard',component:BMIPageComponent
    },
    {
        path:'**',component:LandingPageComponent

    }
];
