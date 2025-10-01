import { Component } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  imports: [ImageComponent, InputTextComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
