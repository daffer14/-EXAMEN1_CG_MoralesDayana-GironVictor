import { Component } from '@angular/core';

import { BodyComponent } from "../body/body.component";
import { HeaderComponent } from "../header/header.component";

@Component({  
  selector: 'app-home',
  imports: [BodyComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
