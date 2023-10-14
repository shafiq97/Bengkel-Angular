import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-directive-example',
  templateUrl: './pipe-directive-example.component.html',
  styleUrls: ['./pipe-directive-example.component.css']
})
export class PipeDirectiveExampleComponent implements OnInit {

  today: Date = new Date();
  names: string[] = ['John', 'Jane', 'Jack', 'Jill'];
  isRed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleColor() {
    this.isRed = !this.isRed;
  }
}
