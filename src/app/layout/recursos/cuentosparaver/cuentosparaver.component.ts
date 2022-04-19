import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentosparaver',
  templateUrl: './cuentosparaver.component.html',
  styleUrls: ['./cuentosparaver.component.css']
})
export class CuentosparaverComponent implements OnInit {
  issloading=true;
  isexist?:boolean
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
