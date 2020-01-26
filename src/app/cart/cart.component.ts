import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items;
  form; // свойство для хранения модели формы
  finishDate;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.form = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]
    ],
      phone: ['', [
        Validators.required,
        Validators.pattern(/"[0-9]{10}/)
      ]],
      mail: ['', [
        Validators.required,
        Validators.email
       ]
      ],
      address: ['', [
        Validators.required
      ]],
      comment: ['', [
        Validators.required
      ]]
    });
  }

  onSubmit(data) {
    this.finishDate = data;

    this.items = this.cartService.clearCart();
    this.form.reset();
  }

}
