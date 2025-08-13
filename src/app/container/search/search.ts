import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necessary for ngModel or two way data binding

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchText: string = '';

  @Output()  searchtextchange: EventEmitter<string>= new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;
  onSearchTextChange(){
    this.searchtextchange.emit(this.searchText);
  }

  UpdateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchtextchange.emit(this.searchText);
  }
}
