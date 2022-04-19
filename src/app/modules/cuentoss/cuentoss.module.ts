import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {AboutComponent} from "../../layout/about/about.component";
import {HelpComponent} from "../../layout/help/help.component";
import {ProfileComponent} from "../../layout/profile/profile.component";
import { PublicacionComponent } from './publicacion/publicacion.component';
import { VerpublicacionesComponent } from './verpublicaciones/verpublicaciones.component';
import {Cuentos11Component} from "../../layout/recursos/cuentos11/cuentos11.component";
import {Cuentos22Component} from "../../layout/recursos/cuentos22/cuentos22.component";
import {CuentosparaverComponent} from "../../layout/recursos/cuentosparaver/cuentosparaver.component";
import { ComnetariosComponent } from './comnetarios/comnetarios.component';
import {MatDialogModule} from "@angular/material/dialog";
import { EditarcuentosComponent } from './editarcuentos/editarcuentos.component';
import { ImgComponent } from './img/img.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {Cuentoss3Component} from "../../layout/cuentoss3/cuentoss3.component";


const routes: Routes = [
  {path:'bienvenida',
    component:WelcomeComponent },
  {path:'about',
    component:AboutComponent },
  {path:'help',
    component:HelpComponent },
  {path:'profile/:userId/:email/:userName',
    component:ProfileComponent },
  {path:'publicacion/:userId/:userName',
    component:PublicacionComponent },
  {path:'verpublicaciones/:userId',
    component:VerpublicacionesComponent },
  {path:'categoria/:userId',
    component:CategoriaComponent},
  {path:'cuentoss11',
    component:Cuentos11Component },
  {path:'cuentoss22',
    component:Cuentos22Component },
  {path:'cuentoss33',
    component:Cuentoss3Component },
  {path:'cuentosver',
    component:CuentosparaverComponent },
  {path:'agregarcomentarios/:id/:userId/:userName',
    component:ComnetariosComponent },
  {path:'agregarimg',
    component:ImgComponent },
  {path:'editarmicuento/:id/:userId/:userName',
    component:EditarcuentosComponent
  }
]

@NgModule({
  declarations: [
    WelcomeComponent,
    AboutComponent,
    HelpComponent,
    ProfileComponent,
    PublicacionComponent,
    VerpublicacionesComponent,
    Cuentos11Component,
    Cuentos22Component,
    CuentosparaverComponent,
    ComnetariosComponent,
    EditarcuentosComponent,
    ImgComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MaterialFileInputModule,
  ]
})
export class CuentossModule { }
