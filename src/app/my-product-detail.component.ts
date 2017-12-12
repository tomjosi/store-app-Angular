import { Component, Input, Output,EventEmitter } from '@angular/core'
import { MyProduct } from './my-product.component';


@Component({
    selector: 'product-detail',
    template: `
    <span *ngIf="product">
    <input [(ngModel)]="product.name" ><input [(ngModel)]="product.price"><input [(ngModel)]="product.description" ></span>
    <button (click)="requestDelete()">delete</button>`
})
export class ProductDetailComponent {
    @Input()
    product: MyProduct
    @Output()
    deleteProduct = new EventEmitter<MyProduct>();
    requestDelete() {
        this.deleteProduct.emit(this.product);
    }
}