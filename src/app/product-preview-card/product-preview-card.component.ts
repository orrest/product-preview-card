import { Component } from '@angular/core';

@Component({
  selector: 'app-product-preview-card',
  standalone: true,
  imports: [],
  templateUrl: './product-preview-card.component.html',
  styleUrl: './product-preview-card.component.css',
})
export class ProductPreviewCardComponent {
  subject = 'PERFUME';
  title = 'Gabrielle Essence Eau De Parfum';
  intro =
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.';
  price = '$149.99';
  oldPrice = '$169.99';
  addToCart = 'Add to Cart';
}
