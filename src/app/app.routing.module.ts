import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./layout/user/user.component";

const routes: Routes = [
  {path:'',redirectTo:'/auth/inicio_sesion',pathMatch:'full'},
  {path:'auth',
    loadChildren:()=>
      import('./modules/auth/auth.module').then((m)=>m.AuthModule)
  },  {path:"panel",component:UserComponent,
    children:[
      {path:'cuentoss',
        loadChildren: ()=>
          import('./modules/cuentoss/cuentoss.module').then((m)=>m.CuentossModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
