import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Brand {name: string; logo:string}

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  @Input() items: Brand[] = [
    {name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg'},
    {name: 'Samsung', logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_2.png?$568_N_PNG$'},
    {name: 'Acer', logo: 'https://images.acer.com/is/image/acer/logo-acer?$responsive$'},
    {name: 'John Hardy', logo: 'https://img.favpng.com/5/1/24/john-hardy-earring-jewellery-jewelry-design-designer-png-favpng-KJeEfD8UmSMss7mWcXkqDf0QB.jpg'},
    {name: 'Fjallraven', logo: 'https://images.seeklogo.com/logo-png/61/1/fjallraven-kanken-logo-png_seeklogo-617156.png'},
    {name: 'SanDisk', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/SanDisk_2024_logo.svg'},
  ]
}
