import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../models/post";
import {Image} from "../../../models/image";
import {ActivatedRoute, Router} from "@angular/router";
import {PublicarService} from "../../../services/publicar.service";
import {FechaService} from "../../../services/fecha.service";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {CategoriasService} from "../../../services/categorias.service";
import {Categoria} from "../../../models/categoria";

@Component({
  selector: 'app-editarcuentos',
  templateUrl: './editarcuentos.component.html',
  styleUrls: ['./editarcuentos.component.css']
})
export class EditarcuentosComponent implements OnInit {

  isLinear = true;
  firstFormGroup?: FormGroup;
  issloading = true;
  posteo:Post []=[];
  userName?:String;
  userId?:String;
  fecha?:Date;
  categoria:Categoria=new Categoria();
  img:Image=new Image();

  uploadedImage?: File;
  dbImage: any;
  postResponse: any;
  ca:Categoria[]=[];
  successResponse?: string;
  image: any;
cuento:Post=new Post();
id?:Number;


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,private _formBuilder: FormBuilder,
              private publicarService:PublicarService, private fechaService:FechaService,
              private categoriaService:CategoriasService,private httpClient:HttpClient) { }

  // @ts-ignore
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id']
      let userId=params['userId']
      let userName = params['userName']
      this.userName=userName;
      this.userId=userId;
      console.log("credenciales"+id,userId,userName)
      this.id=id;

      this.publicarService.getPost(id).subscribe(value => {
        this.cuento=value;
        this.issloading=false;

      })
      this.categoriaService.getAllCate().subscribe(value => {
        this.ca=value
      })
      this.fechaService.getSysdate().subscribe(value => {
        this.fecha=value.fecha;
      })
    })
    this.firstFormGroup = this._formBuilder.group({
      postName: ['', Validators.required],
      idSubreddit: ['', Validators.required],
      descripcion: ['', Validators.required],
      urle:[''],
    });
  }

  post:Post = new Post();

  obtnerdatos(){
    // @ts-ignore
    this.post.id=this.cuento.id;
    this.post.userId = this.cuento.userId;
    this.post.userName=this.cuento.userName;
    this.post.createdDate=this.fecha;
    this.post.idSubreddit=this.categoria.id;
    this.post.idimagenModel=1
    return this.post;
  }

  selectOpcion(event:any){
    this.categoriaService.getid(event.target.value).subscribe(data=>{
      this.categoria=data
      console.log("fffff"+this.categoria.id)
    })

  }

  actualizarcuento(cuento:Post){
      console.log(this.cuento)
      cuento.id=cuento.id;
    this.publicarService.updatemiCuento(this.cuento).subscribe(value => {
      console.log("ssssssssss"+this.publicarService.updatemiCuento(this.cuento))
      Swal.fire({
        title: 'Exito',
        text: 'CUENTO ACTUALIZADO',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#fbc02d",
      })
      this.router.navigate(['/panel/cuentoss/verpublicaciones',cuento.userId]);


    },error => {
      Swal.fire({
        title: 'Error',
        text: 'No se ha podido publicar le cuento '+error.error.message,
        icon: 'error',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#fbc02d",
      })
      this.issloading=false;
    })
  }



}

