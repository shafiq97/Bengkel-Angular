import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items: string[] = [];

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.items = this.myService.getData();
  }

  addNewItem(): void {
    this.myService.addData('New Item');
    this.items = this.myService.getData();
    this.showPopup();
  }

  showPopup(): void {
    Swal.fire({
      title: 'Success!',
      text: 'You added new item!',
      icon: 'success',
      confirmButtonText: 'Close'
    });
  }
  

}
