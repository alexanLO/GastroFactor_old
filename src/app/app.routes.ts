import { Routes } from '@angular/router';
import { LoginScreen } from './pages/login-screen/login-screen';
import { MainScreen } from './pages/main-screen/main-screen';

export const routes: Routes = [
  { path: '', redirectTo: 'grastrofactor', pathMatch: 'full' },
  { path: 'grastrofactor', component: MainScreen },
  { path: 'login', component: LoginScreen },
  {path: 'cadastrar', component: MainScreen} //TODO modificar para a tela de cadastrar
];
