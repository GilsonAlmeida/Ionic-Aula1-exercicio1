import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasPage } from './categorias';

@NgModule({
  declarations: [
    CategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasPage),
  ],
  exports: [
    CategoriasPage
  ]
})
export class CategoriasPageModule {}
