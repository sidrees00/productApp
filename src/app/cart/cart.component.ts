import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) {
    this.items = cartService.getItems();
   }

  ngOnInit() {
  }

}

/*
Notes:

1) Using a service consists of 2 steps:
  a) Importing service
  b) Injecting service into constructor
*/