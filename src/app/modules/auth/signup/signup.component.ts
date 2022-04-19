import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IniciosesionService} from "../../../services/iniciosesion.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLinear = true;
  user: User=new User();
  signupForm?: FormGroup;

  constructor(private authService: IniciosesionService, private router: Router,
              private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.signupForm =this._formBuilder.group({
      email:['', Validators.required],
      clave:['', Validators.required],
      username:['',Validators.required],
    });
  }

  signup(user:User) {
    this.authService.Signup(this.user).subscribe(data => {
        console.log(data)
        Swal.fire({
          title: 'Exito',
          text: 'Registro exitoso',
          icon: 'success',
          iconColor: '#17550c',
          color: "#0c3255",
          confirmButtonColor: "#0c3255",
          background: "#66ff00",
        })
      sessionStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/auth/login']);

      }, err => {
        Swal.fire({
          title: 'Credenciales proporiconadas incorrectas',
          text: err.error.message,
          icon: 'warning',
          color: "#0c3255",
          confirmButtonColor: "#0c3255",
          background: "#fb2d8a",
        })
      }
    )
  }
  irlogin():void{
    this.router.navigate(['/auth/login']);
  }
}
