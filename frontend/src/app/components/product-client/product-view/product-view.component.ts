import { IProduct } from '../../../common/Product';
import { Component } from '@angular/core';
import axios from 'axios';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
})
export class ProductViewComponent {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.handleGetProducts().subscribe((res) => {
      if (res.data && res.data.length > 0) {
        this.products = res.data;
      }
    });
  }
}
