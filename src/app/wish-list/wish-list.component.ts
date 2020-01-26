import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  itemsWishList = [];
  constructor(
    private cartService: CartService,
  ) {

  }
  // getitemsWishList(): void {
  //   this.cartService.getitemsWishList()
  //     .subscribe( itemsWishList => this.itemsWishList = itemsWishList.slice(1, 5));
  // }

  ngOnInit() {
  }
}
