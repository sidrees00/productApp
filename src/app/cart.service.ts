import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  
  constructor(
    private http: HttpClient,
  ) { }

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

  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }
}

/*
Notes: 

1) In Angular, a service is an instance of a class that can be made available to any part of your application using Angular's dependency injection system.

2) Services are the place where you share data between parts of your application. For this app, the cart service is where you store your cart data and methods.

3) Multiple component can leverage the same service.

3) HttpClient is a built-in way to fetch data from external APIs and provide them as a stream.

4) The HttpClient service is what you inject into your services to fetch data and interact with external APIs and resources.

5) The getShippingPrices() method will return data from within a local file.
*/
