import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')]
    })
  }

}

/*
Notes:
1) The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains information about the route, its parameters, and additional data associated with the route.

*/
