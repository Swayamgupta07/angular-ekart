import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Mainmenu } from "./mainmenu/mainmenu";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css'],
    standalone:true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [Mainmenu]
})
export class HeaderComponent {
  // any logic or data for header goes here
}
