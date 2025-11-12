import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroComponent } from './component/hero/hero.component';
import { BrandsComponent } from './component/brands/brands.component';
import { ProductCardsComponent } from './component/product-cards/product-cards.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ListofproductsComponent } from './component/listofproducts/listofproducts.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeroComponent, BrandsComponent, ContactusComponent, ListofproductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HavaTest';
}
