import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainmenu',
  imports: [CommonModule],
  templateUrl: './mainmenu.html',
  styleUrl: './mainmenu.css'
})
export class Mainmenu {
  ekartmenu:string[]=['Home','Products','About','Contact'];
}
