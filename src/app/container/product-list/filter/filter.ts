import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfstock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedFilterRadioButton: string = 'all'; // all bcz it will display all shoes when we open the website

  onSelectedFilterRadioButtonChange() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    // selectedfilterradiobuttonchanged kya kiye ki yeah parent ko signal dega then , emit help karega ki signal bhejena mein then selectedfiklterradiobutton ki value chali jyagi
  }
}

// Flow

// User types in Search box
//     ↓
// (Search component)
//   searchText updated → emit searchtextchange event
//     ↓
// (Container component)
//   setsearchtext() updates container's searchText
//     ↓
// Passes searchText to ProductList via [searchText]="searchText"
//     ↓
// (ProductList component)
//   Receives searchText (from Container)
//   Calculates product counts for Filter component
//   Passes counts via [all], [inStock], [outOfstock]
//     ↓
// (Filter component)
//   Displays counts and radio buttons
//   User selects a filter → ngModel updates selectedFilterRadioButton
//   Calls onSelectedFilterRadioButtonChange()
//   Emits selected filter to ProductList
//     ↓
// (ProductList component)
//   Updates selectedFilterRadioButton
//   Uses *ngIf with BOTH searchText & selectedFilterRadioButton to filter products
//     ↓
// Displays matching products in <app-product>