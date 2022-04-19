import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import Swal from "sweetalert2";
import {User} from "../../models/user";
import {NavigationEnd, Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {delay, filter} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
@UntilDestroy()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  //Variables
  //Imgen obtendida desde el Auth2 de google.
  public email?:string;
  //Estado de barra lateral visible/no visible
  panelOpenState = false;
  //Para almacenar los datos de usuario el inciar session
  persona:User=new User();
  //Obtine el nombre completo de rol correspondiente
  public username:string="";

  //Maneja el estado de carga de esta pagina
  issloading=true;

  constructor(private router:Router,private observer: BreakpointObserver) {

  }


  ngOnInit(): void {


      //Obtine los datos el de incio de sesion con el JSON
      this.persona=JSON.parse(sessionStorage['user']);
      this.email=JSON.parse(sessionStorage['user']).email
      this.username=JSON.parse(sessionStorage['user']).username;
      sessionStorage.clear;
      this.issloading=false
  }



  ngAfterViewInit(): void {
    {
      this.observer.observe(['(max-width: 800px)']).pipe(delay(1), untilDestroyed(this)).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

      this.router.events.pipe(untilDestroyed(this), filter((e) => e instanceof NavigationEnd)).subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
    }
  }
  logout():void{
    this.router.navigate(['/auth/inicio_sesion']);
  }
}
