import { Component, OnInit, Input } from '@angular/core';
import { Product } from "app/Model/Product";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(public route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
      console.log(this.product);
  }
}
