import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  items;
  summa;
  constructor(
    private cartService: CartService,
  ) {
    this.items = this.cartService.getItems();
    this.summa = this.cartService.getSumma();
    // for (const product of this.items) {
    //   this.summa += product.price ;
    //   console.log(this.summa);
    // }
  }


}
