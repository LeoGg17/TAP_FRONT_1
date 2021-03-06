import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {IniciosesionService} from "../../../services/iniciosesion.service";

let PARAMETROS=''
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {
  socialUser!: SocialUser;
  userLogged!: SocialUser;

  public userRequest: User = new User();
  habilitar: boolean = true;

  cedulaFormControl = new FormControl('', [ Validators.pattern( '[0-9]{10}'),Validators.required]);
  matcher = new MyErrorStateMatcher();
  omit_special_char(event: { charCode: any; })
  {var k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k >= 48 && k <= 57));
  }
  omit_max_char(event:{ target: any; })
  {var k;
    k = event.target.value.length;  //         k = event.keyCode;  (Both can be used)
    console.log(k)
    return (k <= 9);
  }
  constructor(private router: Router,private iniciosesionService: IniciosesionService) { }
  ngOnInit(): void {

  }
  logOut(): void{
  }

  //Crea a un usario nuevo si este no existe
  // public create():void{
  //   console.log(this.userRequest.cedula)
  //   this.iniciosesionService.Signup(this.userRequest).subscribe(
  //     data => {
  //       sessionStorage.clear;
  //       if(data.rol=="DOC"){
  //         console.log("No esta dentro")
  //       }else{
  //         sessionStorage.setItem('user', JSON.stringify(data));
  //         this.router.navigate(['/panelusuario/proyectovinculacion/cordinadorvinculacion']);
  //       }
  //     },
  //     err=>{
  //       console.log("No esta dentro")
  //     }
  //   )
  // }

  setHabilitar(habilitar:boolean):void{
    this.habilitar=(this.habilitar==true)? false: true;
  }
  irlogin():void{
    this.router.navigate(['/auth/login']);
  }
}
