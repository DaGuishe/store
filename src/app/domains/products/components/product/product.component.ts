import { RouterLinkWithHref } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ReversePipe } from '../../../shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product',
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input({required: true}) product!: Product;


    @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

    addToCartHandler() {
        console.log('Add to cart');
        this.addToCart.emit(this.product);
    }
}
