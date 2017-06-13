import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchFilterPipe } from "app/search-pipe";
import { AppRoutingModule } from './app-routing';
import { HomeComponent } from "app/home-component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from "app/services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
