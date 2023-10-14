import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  product: any = {};
  apiURL: string = 'https://dummyjson.com/products/5';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiURL).subscribe(data => {
      this.product = data;
    });
  }

}
