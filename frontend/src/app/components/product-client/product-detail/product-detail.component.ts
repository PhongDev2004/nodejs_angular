import { Component } from '@angular/core';
import { IProduct } from '../../../common/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product!: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productsService.handleGetProduct(id).subscribe((response) => {
        if (response.data) {
          this.product = response.data;
        }
      });
    });
  }
}
