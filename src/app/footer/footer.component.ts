import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showPopup(): void {
    Swal.fire({
      title: 'Success!',
      text: 'You clicked the footer!',
      icon: 'error',
      confirmButtonText: 'Close'
    });
  }
  

}
