import { Routes } from '@angular/router';
import { UserRegistersComponent } from './components/user-registers/user-registers.component';
import { LoginComponent } from './components/login/login.component';
import path from 'path';

export const routes: Routes = [
    {path: 'registrodeusuarios', component:UserRegistersComponent},
    {path: 'login',component:LoginComponent}
];
