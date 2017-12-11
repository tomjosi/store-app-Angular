import { Component, Input, Output,EventEmitter } from '@angular/core'
// import { Input, Output } from '@angular/core/src/metadata/directives';
import { MyProduct } from './my-product.component';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
    selector: 'product-detail',

    template: `
    <span *ngIf="product">
    {{product.description}}</span>
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