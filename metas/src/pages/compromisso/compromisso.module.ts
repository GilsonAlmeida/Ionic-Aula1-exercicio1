import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompromissoPage } from './compromisso';

@NgModule({
  declarations: [
    CompromissoPage,
  ],
  imports: [
    IonicPageModule.forChild(CompromissoPage),
  ],
  exports: [
    CompromissoPage
  ]
})
export class CompromissoPageModule {}
