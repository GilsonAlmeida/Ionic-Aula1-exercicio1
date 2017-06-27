import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Meta } from "../../data/metas.interface";
import metas from '../../data/metas';
import { MetasPage } from "../metas/metas";

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage implements OnInit {

  metasPage = MetasPage;
  metaCollection: { categoria: string, metas: Meta[], icon: string }[];

  ngOnInit() {
    this.metaCollection = metas;  
  }

}