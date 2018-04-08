import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';

import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '', redirectTo: '/password', pathMatch: 'full'},
  { path: 'password', component: PasswordComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
