import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopNavigationPage } from './top-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: TopNavigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopNavigationPageRoutingModule {}
