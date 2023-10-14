import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Property that will be interpolated in the view
  username: string = 'AngularUser';

  constructor() { }

  ngOnInit(): void {
  }

}
