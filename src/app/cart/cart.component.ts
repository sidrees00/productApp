import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '', 
      address: ''
    })
   }

   onSubmit(customerData) {
    // In a real-world app, this method would submit the data to an external server
    console.warn('Your order has been submitted!', customerData)

    // Empties cart items via cartService
    this.items = this.cartService.clearCart();
    // Clears checkoutForm
    this.checkoutForm.reset();
   }

  ngOnInit() {
  }

}

/*
Notes:

1) Using a service consists of 2 steps:
  a) Importing service
  b) Injecting service into constructor

2) There are two parts to an Angular Reactive form:
  a) the objects that live in the component to store and manage the form (known as the model). 
  b) the visualization of the form that lives in the template.

  3) The form model (i.e. checkoutForm) is the source of truth for the status of the form and is defined in the component class.

  4) Angular's FormBuilder service provides convenient methods for generating controls. The FormBuilder service is provided by the ReactiveFormsModule. 
*/