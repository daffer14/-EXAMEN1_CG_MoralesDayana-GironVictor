import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';


@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabel],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  value1: string | undefined;
}
