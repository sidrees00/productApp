import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  
  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

/*
Notes: 
1) Services are an integral part of Angular applications. In Angular, a service is an instance of a class that can be made available to any part of your application using Angular's dependency injection system.

Services are the place where you share data between parts of your application. For the online store, the cart service is where you store your cart data and methods.
*/
