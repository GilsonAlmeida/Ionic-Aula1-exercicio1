
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Meta } from "../../data/metas.interface";
import { MetasService } from "../../services/metas.service";
import { MetaPage } from "../meta/meta";

@IonicPage()
@Component({
  selector: 'page-compromisso',
  templateUrl: 'compromisso.html',
})
export class CompromissoPage {

metas: Meta[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private metaService: MetasService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.metas=this.metaService.getMetasSelecionadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompromissoPage');
  }

  onViewMeta(meta: Meta) {

    this.metaService.setTexto(meta.texto);
    const modal = this.modalCtrl.create(MetaPage);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.metaService.removeSelecaoMeta(meta);
        this.metas=this.metaService.getMetasSelecionadas();
      }
    });
  }

}
