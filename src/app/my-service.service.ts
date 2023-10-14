import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private data: string[] = [];

  constructor() { }

  addData(item: string): void {
    this.data.push(item);
  }

  getData(): string[] {
    console.log(this.data);
    return this.data;
  }

}
