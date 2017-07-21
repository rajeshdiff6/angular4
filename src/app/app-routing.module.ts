import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharesComponent }   from './shares.component';
const routes: Routes = [
  { path: 'shares',  component: SharesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
