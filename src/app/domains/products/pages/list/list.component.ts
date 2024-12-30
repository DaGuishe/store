import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=324',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 2000,
        image: 'https://picsum.photos/640/640?r=325',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 2000,
        image: 'https://picsum.photos/640/640?r=315',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 1',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=324',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 2000,
        image: 'https://picsum.photos/640/640?r=325',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 2000,
        image: 'https://picsum.photos/640/640?r=315',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
