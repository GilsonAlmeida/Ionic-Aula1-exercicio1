import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetaPage } from './meta';

@NgModule({
  declarations: [
    MetaPage,
  ],
  imports: [
    IonicPageModule.forChild(MetaPage),
  ],
  exports: [
    MetaPage
  ]
})
export class MetaPageModule {}
