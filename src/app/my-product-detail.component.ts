import {Component} from '@angular/core'
import { MyProduct } from './my-product.component';

@Component({
    selector: 'product-detail',
    template: ` 
    
    <li *ngFor="let product of p5">
    {{ product?.id }}:{{ product?.name }}
    </li>
    
    `,
    styles: [`
    div {
      
      border:1px solid blue;
      
    }
   `]
    })
    export class ProductDetail {
        p1;
        p2= new MyProduct(2,"Watch",720,"QUARTZ");
        p3= new MyProduct(3,"LapTop",220,"HP");
        p4= new MyProduct(4,"TV",1520,"SONY");

        p5: MyProduct[]=[this.p1,this.p2,this.p3,this.p4];

    }
    
    