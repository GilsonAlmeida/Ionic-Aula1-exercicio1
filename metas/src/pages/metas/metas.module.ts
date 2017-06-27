import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetasPage } from './metas';

@NgModule({
  declarations: [
    MetasPage,
  ],
  imports: [
    IonicPageModule.forChild(MetasPage),
  ],
  exports: [
    MetasPage
  ]
})
export class MetasPageModule {}
