import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IniciosesionService} from "../../../services/iniciosesion.service";
import {PublicarService} from "../../../services/publicar.service";

@Component({
  selector: 'app-cuentos22',
  templateUrl: './cuentos22.component.html',
  styleUrls: ['./cuentos22.component.css']
})
export class Cuentos22Component implements OnInit {

  tipoRecurso: any = {"idTipoRecurso": "2", "nombreTipoRecurso": "video"};
  cuentoPino: any = {"nombre": "Pinocho", "autor": "Carlo Collodi"};
  recursoPino: any = {"url": "Pinocho.com"};
  cuentoBlanca: any = {"nombre": "BlancaNieves", "autor": "Wilhelm Grimm"};
  recursoBlanca: any = {"url": "Blancanieves.com"};
  cuentoCape: any = {"nombre": "Caperucita Roja", "autor": "Trina Schart Hyman"};
  recursoCape: any = {"url": "Caperucita.com"};

  constructor(public router: Router, public servicio: PublicarService) {
  }

  ngOnInit() {
  }

  guardarPinochoCuento() {


    this.servicio.createPost(this.cuentoPino).subscribe(result1 => {
      console.log('Cuento ha sido guardado');
      console.log(this.cuentoPino);
      console.log(result1);
    }, err => {
      console.log(err);
    });

  }

  guardarBlancaCuento() {


    this.servicio.createPost(this.cuentoBlanca).subscribe(result1 => {
      console.log('Cuento ha sido guardado');
      console.log(this.cuentoBlanca);
      console.log(result1);
    }, err => {
      console.log(err);
    });

  }

  guardarCaperucitaCuento() {


    this.servicio.createPost(this.cuentoCape).subscribe(result1 => {
      console.log('Cuento ha sido guardado');
      console.log(this.cuentoCape);
      console.log(result1);

    });

  }
}
