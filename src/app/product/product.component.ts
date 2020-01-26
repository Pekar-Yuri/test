import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product;

  constructor(
    private cartService: CartService
  ){}

  addToCart(product) {
    window.alert('Продукт добавлен в корзину');
    this.cartService.addToCart(product);
  }
}
