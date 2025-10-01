import { Component } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { Carta2Component } from "../carta2/carta2.component";
import { Carta3Component } from "../carta3/carta3.component";

@Component({
  selector: 'app-cards',
  imports: [CartaComponent, Carta2Component, Carta3Component],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
