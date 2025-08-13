import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { Search } from "./search/search";
import { ProductDetail } from './product-detail/product-detail';

@Component({
  selector: 'app-container',
  imports: [CommonModule, ProductList, Search, ProductDetail],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  searchText: string = '';

  @ViewChild('productListComponent') productListComponent:ProductList;

  setsearchtext(value: string){
    this.searchText = value;
  }
}
// Final Clear Summary
// searchText in Search (child) → Holds the value typed by the user in the search box.

// @Output() searchtextchange → Special event emitter used to send that value from child to parent.

// onSearchTextChange / UpdateSearchText (child methods) → Trigger searchtextchange.emit(searchText) so the parent gets the updated value.

// searchText in Container (parent) → Stores the value received from the child’s event.

// setsearchtext (parent method) → Takes the emitted value and updates parent’s searchText.

// Parent HTML (container.html) → Displays the search result text or filters the product list using the parent’s searchText.
// Child HTML (search.html) → Displays the search box and button, collects user input


// Flow of Data:
// User types → Search Component stores in searchText (child)
//    ↓
// User clicks Search → Search emits event searchtextchange(value)
//    ↓
// Container receives it via setsearchtext(value)
//    ↓
// Container stores in searchText (parent) → Uses it for filtering/display
