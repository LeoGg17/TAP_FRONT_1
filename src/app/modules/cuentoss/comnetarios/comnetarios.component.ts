import {Component, Inject, OnInit} from '@angular/core';
import {Comentario} from "../../../models/comentario";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {CommentRequest, Post} from "../../../models/post";
import {PublicarService} from "../../../services/publicar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DateAdapter} from "@angular/material/core";
import {FechaService} from "../../../services/fecha.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-comnetarios',
  templateUrl: './comnetarios.component.html',
  styleUrls: ['./comnetarios.component.css']
})
export class ComnetariosComponent implements OnInit {
  activar?: boolean = false;
  sum = 0;
  isLinear = true;
  panelOpenState = true;
  isexist?: boolean;
  canBotton: boolean = false
  numerominimo = 0;
  issloading = true;
  myControl = new FormControl();
  filteredOptions?: Observable<Post[]>;
  username?: String;
  posteos: Post[] = [];
  cm: Comentario[] = [];
  posteo: Post = new Post();
  secondFormGroup?: FormGroup;
  rows: FormArray;
  itemForm?: FormGroup;
  fechae?: Date;
  userName?:String;
  userId?:String;
  id?:Number;

  constructor(private publicarService: PublicarService,
              private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private fechaService: FechaService,
              private _adapter: DateAdapter<any>, private router: Router) {
    this._adapter.setLocale('es-ec');
    this.secondFormGroup = this._formBuilder.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });
    this.rows = this._formBuilder.array([]);

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      let userId=params['userId']
      let userName = params['userName']
      this.userName=userName;
      this.userId=userId;
      console.log("credenciales"+id,userId,userName)
      this.id=id;
      this.publicarService.getcuentobyid(id).subscribe(data => {
        this.posteo = data
        this.posteo.comentarios?.forEach(value1 => {
          this.onAddRow(value1.comentario+'')
        })

        console.log(data);
        this.issloading = false;
      })

      this.fechaService.getSysdate().subscribe(value => {
        this.fechae = value.fecha;
      })
    })

    this.secondFormGroup = this._formBuilder.group({});

    this.secondFormGroup.get("items_value")?.setValue("yes");
    this.secondFormGroup.addControl('rows', this.rows);
  }
  //Array
  onAddRow(comentarios: String) {
    this.rows.push(this.createItemFormGroup(comentarios));
    console.log(this.rows.getRawValue()+'555555555555jhghj')
  }
  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }
  createItemFormGroup(comentarios: String): FormGroup {
    return this._formBuilder.group({
      userId:[this.userId+''],
      comentario:[comentarios,Validators.required],
      createDate:[this.fechae],
      userName:[this.userName+''],
    });
  }
  poste:Post= new Post;
  ontnerDatos():Post{
    this.poste.id=this.id;
    this.poste.idSubreddit=this.posteo.idSubreddit;
    this.poste.createdDate=this.posteo.createdDate;
    this.poste.comentarios=this.rows.getRawValue();
    this.poste.userId=this.posteo.userId;
    this.poste.userName=this.userName;

    return this.poste;
    console.log(this.poste+"dddddddddddddddddddddd")
  }

  // comentarios:CommentRequest[]=[];
  actulizar(pos:Post){
    // this.cm.forEach(value1 => {
    //   this.comentarios.push({
    //     comentario:value1.comentario+""
    //   })
    // })
    // console.log(this.comentarios)
    pos=this.ontnerDatos();
    pos.comentarios=this.rows.getRawValue()

    this.publicarService.updatessss(pos,Number(pos.id)).subscribe(datos=>{
      console.log(this.publicarService.update(this.ontnerDatos()))
      Swal.fire({
        icon: 'success',
        title: 'Comentario Subido',
        text: '',
        confirmButtonColor: "#0c3255",
        background: "#fbc02d",
      })

      this.router.navigate(['/panel/cuentoss/verpublicaciones',pos.userId]);
    },err=>{
      Swal.fire({
        icon: 'warning',
        title: 'Al paracer hubo un problema',
        text: err.error.message,
        confirmButtonColor: "#0c3255",
        background: "#fbc02d",
      })
    })
  }



  }
