import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  itemsWishList = [];
  summa;
  addToCart(product) {
    this.summa += parseInt(product.price);
    console.log(this.summa);
    this.items.push(product);
  }
  addToWishList(product) {
    product.date = new Date().toDateString();
    this.itemsWishList.push(product);
  }

  getItems() {
    return this.items;
  }
  getSumma() {
    return this.summa;
  }
  getitemsWishList() {
    return this.itemsWishList;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
