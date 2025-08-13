import { Component, Input } from '@angular/core';
import { Products } from '../../Models/Products';
import { ProductList } from '../product-list/product-list';

import { CommonModule } from '@angular/common';// for the basic Angular directives - ngIf, ngFor, ngswitchcase

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product: Products = new Products();
  @Input() productListComp: ProductList = undefined;
  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
