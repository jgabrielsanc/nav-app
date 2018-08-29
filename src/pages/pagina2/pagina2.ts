import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.paginas';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar Metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneracion Rapida"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes Psiquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar Objectos Inanimados con Energia"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante:any){

    console.log(mutante);

    this.navCtrl.push(Pagina3Page, { 'mutante': mutante});

  }

}
