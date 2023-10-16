import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];

  // Using Angular's HTTPClient to fetch data
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products')
      .subscribe((response: any) => {
        this.products = response.products;
      });
  }

  ngOnDestroy(): void {
  }
}
