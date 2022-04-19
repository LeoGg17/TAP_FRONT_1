import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {map, Observable, startWith} from "rxjs";
import {Post} from "../../models/post";
import {FormBuilder, FormControl} from "@angular/forms";
import {FechaService} from "../../services/fecha.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PublicarService} from "../../services/publicar.service";
import {DateAdapter} from "@angular/material/core";
import {IniciosesionService} from "../../services/iniciosesion.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  issloading = true;
  isexist?: boolean
  panelOpenState = false;
  myControl = new FormControl();
  filteredOptions?: Observable<Post[]>;
  userId?: String;
  userName?:String;
  email?: String;
  posts11: Post[] = [];

  constructor(private fechaService: FechaService,
              private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder,
              private publicarService: PublicarService,
              private _adapter: DateAdapter<any>,
              private router: Router, private iniciosesionService:IniciosesionService) {
    this._adapter.setLocale('es-ec');
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let userId = params['userId'];
      let userName = params['userName'];
      let email=params['email'];
      this.email=email;
      this.userId = userId;
      this.userName=userName;
      console.log(userId)
      this.publicarService.getAllPosts().subscribe(p11 => {
        this.posts11 = p11.filter(value => value.userId == userId);
        // this.iniciosesionService.

        this.isexist = p11.length != 0;
        this.issloading = false;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(values => this.filter(values)),
        );
        console.log(this.posts11)
      })
    })

  }



  filter(value: any): Post[] {
    const filterValue = value.toLowerCase();
    return this.posts11.filter(option => option.postName?.toLowerCase().includes(filterValue)
      // || option.createdDate?.toLocaleLowerCase().includes(filterValue).toString()
    );
  }


  eliminarCuento(post: Post) {
    this.issloading = true;
    this.publicarService.deleteCuento(post.id).subscribe(value => {
      Swal.fire({
        title: 'Exito',
        text: 'Cuento Eliminado',
        icon: 'success',
        iconColor: '#17550c',
        color: "#0c3255",
        confirmButtonColor: "#0c3255",
        background: "#2dfb86",
      })
      window.location.reload();
    }, error => {
      Swal.fire({
        title: 'Error',
        text: 'El cuento no se elimino ' + error.error.messages,
        icon: 'error',
        color: "#0c3255",
        confirmButtonColor: "#0c3255",
        background: "#fb2da9",
      })
      window.location.reload();
    })
    this.issloading = false;
  }
}
