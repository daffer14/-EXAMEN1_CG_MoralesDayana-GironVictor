import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { Imagen2Component } from "../imagen2/imagen2.component";
import { CardsComponent } from "../cards/cards.component";
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-body',
  imports: [MenubarComponent, Imagen2Component, CardsComponent, AccordionComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
