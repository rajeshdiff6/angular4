import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharesComponent } from './shares.component';
import { TemplatesyntaxComponent } from './templatesyntax.component';

const routes: Routes = [
  { path: 'directive',  component: SharesComponent },
  { path: 'templatesyntax',  component: TemplatesyntaxComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
