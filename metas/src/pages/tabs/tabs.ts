import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { CompromissoPage } from '../compromisso/compromisso';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  compromissoPage = CompromissoPage;
  categoriasPage = CategoriasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}