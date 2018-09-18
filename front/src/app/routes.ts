import { ListComponent } from './list/list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path:'home', component:ListComponent},
];