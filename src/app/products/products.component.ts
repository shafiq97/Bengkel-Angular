import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface SortEvent {
  prop: keyof Product;
  dir: "asc" | "desc";
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  originalProducts: Product[] = [];

  columns = [
    { prop: "id", name: "ID" },
    { prop: "title", name: "Product Title" },
    { prop: "description", name: "Description" },
    { prop: "price", name: "Price" },
    { prop: "discountPercentage", name: "Discount Percentage" },
    { prop: "rating", name: "Rating" },
    { prop: "stock", name: "Stock" },
    { prop: "brand", name: "Brand" },
    { prop: "category", name: "Category" },
  ];

  constructor(private http: HttpClient) {}

  updateFilter(event: any) {
    const input = event.target as HTMLInputElement;
    const val = input.value.toLowerCase();

    // Always filter from the original, unfiltered list
    const temp = this.originalProducts.filter((product) =>
      product.title.toLowerCase().includes(val)
    );

    // update the rows
    this.products = temp;
  }

  onSort(event: { sorts: SortEvent[] }) {
    const sort = event.sorts[0];
    const rows = [...this.products];

    this.products = rows.sort((a: Product, b: Product) => {
      const valA = a[sort.prop];
      const valB = b[sort.prop];

      if (typeof valA === "string" && typeof valB === "string") {
        return valA.localeCompare(valB) * (sort.dir === "desc" ? -1 : 1);
      }
      return 0;
    });
  }

  ngOnInit(): void {
    this.http.get("https://dummyjson.com/products").subscribe((data: any) => {
      this.originalProducts = data.products;
      this.products = [...this.originalProducts];
    });
  }
}
