import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from "app/home-component";
import { ProductDetailComponent } from "app/product-detail/product-detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'detail/:id', component: ProductDetailComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}