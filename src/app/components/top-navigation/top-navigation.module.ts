import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TopNavigationPageRoutingModule } from './top-navigation-routing.module';

import { TopNavigationPage } from './top-navigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopNavigationPageRoutingModule,
    RouterModule.forChild([{ path: '', component: TopNavigationPage }]),
  ],
  declarations: [TopNavigationPage],
})
export class TopNavigationPageModule {}
