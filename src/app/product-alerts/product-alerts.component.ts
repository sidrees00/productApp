import { Component, OnInit, Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  
  constructor() { }

  ngOnInit() {
  }

}


/*
Notes: 

1) A decorator is placed directly before the class it affects.  E.g. - The @Component decorator is placed direclty before the ProductAlertsComponent class.  The decorator provides metadata about the component, including its templates, styles, and a selector.

2) The selector is the name you give the Angular component when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app-, followed by the component name.

*/