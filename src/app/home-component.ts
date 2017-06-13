import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "app/Model/Product";
import { Category } from "app/Model/Category";
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home-component.html',
    styleUrls: ['./home-component.css']
})
export class HomeComponent {
  
 selectedCategory: string = "";
  basket: Product [] = [];
  @Input() selectedProduct: Product;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>()

  constructor(private router: Router){

  }

  productList: Product[] = [
    new Product(1,"IBM 4500", "Bilgisayar Desc.", "https://image5.sahibinden.com/photos/02/78/65/x5_448027865mj7.jpg", 2000, "Bilgisayar"),
    new Product(2,"Mercedes C180", "Merceden Desc.", "https://image5.sahibinden.com/photos/86/29/47/x5_443862947u26.jpg", 110000, "Otomobil"),
    new Product(3,"Iphone 7", "Iphone Desc.", "https://image5.sahibinden.com/photos/18/00/02/x5_448180002jpl.jpg", 4500, "Telefon"),
    new Product(4,"Lenovo", "Bilgisayar Desc.", "https://image5.sahibinden.com/photos/23/76/64/x5_4482376642e0.jpg", 2500, "Bilgisayar"),
  ];

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

  getDetail(product: Product){
     this.selectedProduct = product;
     this.router.navigate(['/detail', product.id]);
  }
}