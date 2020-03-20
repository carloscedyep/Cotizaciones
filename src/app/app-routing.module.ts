import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogin } from './components/user-login/user-login';
import { UserRegister } from './components/user-register/user-register'
import { Cotizacion } from './components/cotizacion/cotizacion'
import { UserRecovery } from './components/user-recovery/user-recovery'

const routes: Routes = [
  { path: 'user-login', component: UserLogin },
  { path: 'user-register', component: UserRegister },
  { path: 'user-recovery', component: UserRecovery },
  { path: 'cotizacion', component: Cotizacion },
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
