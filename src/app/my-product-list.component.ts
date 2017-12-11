import { Component } from '@angular/core'
import { MyProduct } from './my-product.component';
import { ProductDetailComponent } from './my-product-detail.component';

@Component({
    selector: 'product-list',
    template: ` 
    
    <ul>
    <li *ngFor="let product of p5" (click)="selectedProduct = product"> {{product.id}}: {{product.name}}
    </li>
    </ul>
   <product-detail [product] = "selectedProduct" (deleteProduct)="delete($event)"> </product-detail>
    
    `,
    styles: [`
    div {
      
      border:1px solid blue;
      
    }
   `]
})
export class ProductList {

    //p1;
    p2 = new MyProduct(2, "Watch", 720, "QUARTZ");
    p3 = new MyProduct(3, "LapTop", 220, "HP");
    p4 = new MyProduct(4, "TV", 1520, "SONY");

    p5: MyProduct[] = [ this.p2, this.p3, this.p4];

    selectedProduct: MyProduct;
    delete(product: MyProduct) {
        for (var i = 0; i < this.p5.length; i++) {
            if (this.p5[i] == product) {
                this.p5.splice(i, 1)
            }
        }
    }

}

