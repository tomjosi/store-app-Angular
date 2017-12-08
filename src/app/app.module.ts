import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyProduct } from './my-product.component';
import { ProductDetail } from './my-product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MyProduct,
    ProductDetail
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
