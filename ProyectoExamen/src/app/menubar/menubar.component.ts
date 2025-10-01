import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [Menubar],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home'
            },
            {
                label: 'Características',
                icon: 'pi pi-star'
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Desarrollo de Software a la Medida',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Desarrollo movil',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'Soporte a Aplicaciones',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contactos',
                icon: 'pi pi-envelope'
            }
        ]
    }
}
