import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import {Products} from './../../../Models/Products';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
 @Input() product: Products;
  @Output() productSelected = new EventEmitter<Products>();

  selectProduct() {
    this.productSelected.emit(this.product);
  }
}
