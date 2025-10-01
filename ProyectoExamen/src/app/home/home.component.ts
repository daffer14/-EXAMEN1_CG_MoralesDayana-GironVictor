import { Component } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { ButtonComponent } from "../button/button.component";
import { BodyComponent } from "../body/body.component";

@Component({  
  selector: 'app-home',
  imports: [ImageComponent, InputTextComponent, ButtonComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
