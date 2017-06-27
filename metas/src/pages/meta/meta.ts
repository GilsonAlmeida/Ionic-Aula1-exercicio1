import { MetasService } from './../../services/metas.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html',
})
export class MetaPage {
  texto :String;
  constructor(public viewCtrl: ViewController,  private metaService: MetasService) {
    this.texto = metaService.getTexto();
  }

  onClose(remove = false) {
      this.viewCtrl.dismiss(remove);
  }


} 