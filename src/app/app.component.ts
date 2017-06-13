import { Component } from '@angular/core';
import { Product } from './Model/Product';
import { Category } from './Model/Category';
import { Router } from '@angular/router';
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: string = "";
  basket: Product [] = [];

  constructor(private _productService: ProductService){

  }

  productList = this._productService.getProducts();

  categoryList: Category[] = [new Category("Telefon"),new Category("Bilgisayar"),new Category("Otomobil")];

  onSelectCategory(categoryName: string){
    this.selectedCategory = categoryName;
  }

  addToBasket(product: Product){
      this.basket.push(product);
  }

  deleteLiseBasket(){
      this.basket = [];
  }

  removeBasketItem(index: number){
    this.basket.splice(index,1)
  }
}
