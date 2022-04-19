import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor() {
    this.sliders.push(
      {
        imagePath: 'assets/images/losmejorescuentos.jpg',
        label: '',
        text:
          ''
      },
      {
        imagePath: 'assets/images/valores.png',
        label: '',
        text: ' '

      },
      {
        imagePath: 'assets/images/clasicos.jpg',
        label: '',
        text:
          ''
      }

    );

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: ``
      },
      {
        id: 2,
        type: 'warning',
        message: ``
      }
    );
  }

  ngOnInit() { }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
  hol() {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true
    })
  }

}
