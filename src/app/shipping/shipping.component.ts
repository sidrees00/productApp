import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService,
  ) {
    this.shippingCosts = cartService.getShippingPrices();
   }

  ngOnInit() {
  }

}

/*
Notes:

1) Data is currently routed as follows: ShippingComponent --> cartService --> HttpClient --> /shipping.json

*/

