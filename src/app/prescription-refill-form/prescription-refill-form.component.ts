import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prescription-refill-form',
  templateUrl: './prescription-refill-form.component.html',
  styleUrls: ['./prescription-refill-form.component.css']
})
export class PrescriptionRefillFormComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Place logic here that you want to run when the component is destroyed.
    console.log('PrescriptionRefillFormComponent destroyed');
  }

}
