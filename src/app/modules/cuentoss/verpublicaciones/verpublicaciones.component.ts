import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentRequest, Post} from "../../../models/post";
import {PublicarService} from "../../../services/publicar.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {map, Observable, startWith} from "rxjs";
import {DateAdapter} from "@angular/material/core";
import {Comentario} from "../../../models/comentario";
import {Image} from "../../../models/image";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-verpublicaciones',
  templateUrl: './verpublicaciones.component.html',
  styleUrls: ['./verpublicaciones.component.css']
})
export class VerpublicacionesComponent implements OnInit {
  activar?: boolean = false;
  sum = 0;
  isLinear = true;
  panelOpenState = true;
  isexist?: boolean;
  canBotton: boolean = false
  numerominimo = 0;
  issloading=true;
  myControl = new FormControl();
  filteredOptions?: Observable<Post[]>;
  username?:String;
  posteos:Post[]=[];
  posteo:Post=new Post();
  constructor(private publicarService:PublicarService,
              private activatedRoute: ActivatedRoute,private _formBuilder: FormBuilder,
              private _adapter: DateAdapter<any>,private router:Router, private httpClient:HttpClient,
              private domSanitizer: DomSanitizer) {
    this._adapter.setLocale('es-ec');

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let username = params['username']
      this.username=username;
console.log(username)
      this.publicarService.getAllPosts().subscribe(p => {
        this.posteos=p;

        console.log(p)
        this.isexist = p.length != 0;
        this.issloading = false;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(values => this.filter(values)),
        );
        console.log(this.posteos)
      })
    })

  }


  ngAfterViewInit(): void {
    setTimeout(()=>{

    },1000)
  }
  filter(value: any): Post[] {
    const filterValue = value.toLowerCase();
    return this.posteos.filter(option => option.postName?.toLowerCase().includes(filterValue)

      // ||option.url?.toLocaleLowerCase().includes(filterValue)
    );
  }



  title = 'ImageUploaderFrontEnd';

  // @ts-ignore
  public selectedFile;
  imgURL: any;
  receivedImageData: Image=new Image();
  base64Data: any;
  convertedImage: any;
  retrieveResonse: any;
  retrievedImage: any;


  // This part is for uploading
  onUpload() {


    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.httpClient.post('http://localhost:8080/check/upload', uploadData)
      .subscribe(
        res => {console.log(res);
          this.receivedImageData = res;
          this.base64Data = '12985815';
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(   this.receivedImageData.id);



          },

        err => console.log('Error Occured duringng saving: ' + err)
      );


  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/check/get/'+1)
      .subscribe(
        res => {
          this.receivedImageData  = res;
          this.base64Data = this.receivedImageData.pic;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.domSanitizer.bypassSecurityTrustUrl(this.retrievedImage);
        }
      );
  }


}
