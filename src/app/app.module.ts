import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopComponent } from './top/top.component';
import { CartComponent } from './cart/cart.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopComponent,
    CartComponent,
    ProductDetailsComponent,
    ProductComponent,
    WishListComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: ProductListComponent},
        {path: 'products/:productId', component: ProductDetailsComponent  },
        {path: 'cart', component: CartComponent },
        {path: 'wish-list', component: WishListComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
