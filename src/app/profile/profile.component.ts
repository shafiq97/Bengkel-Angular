import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Property that will be interpolated in the view
  username: string = 'AngularUser';
  items: string[] = [];
  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.items = this.myService.getData();
    console.log('from profile component', this.items)
  }

}
