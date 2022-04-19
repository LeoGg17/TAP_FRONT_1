import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Image} from "../../../models/image";
import {ImagenesService} from "../../../services/imagenes.service";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor(private imagenesService:ImagenesService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }



  title = 'ImageUploaderFrontEnd';

  // @ts-ignore
  public selectedFile;
  imgURL: any;
  receivedImageData: Image=new Image();
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event:any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


  // This part is for uploading
  onUpload() {


    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.httpClient.post('http://localhost:8080/check/upload', uploadData)
      .subscribe(
        res => {console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
        err => console.log('Error Occured duringng saving: ' + err)
      );


  }


}
