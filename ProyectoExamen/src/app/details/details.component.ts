import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MenubarComponent } from "../menubar/menubar.component";
import { ToastComponent } from "../toast/toast.component";


@Component({
  selector: 'app-details',
  imports: [HeaderComponent, MenubarComponent, ToastComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
