import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name: "iphone",
    color: "black",
    price: 999,
    discount: 13,
    inStock: 3,
    pImage: '/assets/images/iphone15.webp'
  }

  getDiscount(){
    return (this.product.price * this.product.discount) / 100; 
  }

  checkStock(){
    if(this.product.inStock > 0)
        return true;
      else
      return false;
  }
}
