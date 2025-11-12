import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
  @Input({required:true}) product: any;
  fallbackImg = 'https://via.placeholder.com/600x600?text=Producto';

  onImgError(ev: Event){
    (ev.target as HTMLImageElement).src = this.fallbackImg;
  }
}
