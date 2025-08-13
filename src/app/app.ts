import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./Header/header.component";
import { TopHeader } from "./top-header/top-header";
import { TopMenu } from './Header/top-menu/top-menu';
import { Mainmenu } from './Header/mainmenu/mainmenu';
import { Container } from './container/container';
import { Search } from './container/search/search';
import { ProductList } from './container/product-list/product-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopHeader,TopMenu,Mainmenu,Container,Search, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-ekart';
}
