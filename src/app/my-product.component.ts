import { Component } from '@angular/core'

@Component({
    selector: 'my-product',
    template: `Products`
})
export class MyProduct {
    id: number;
    price: number;
    name: string;
    description: string;

    constructor(id: number, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

}