import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { IProduct } from '../../../../common/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  isModelOpen = false;
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProduct();
    this.productsService.listChange.subscribe((res) => {
      console.log('ACTION', res);
      this.getAllProduct();
    });
  }

  getAllProduct() {
    this.productsService.handleGetProducts().subscribe((res) => {
      if (res.data && res.data.length > 0) {
        this.products = res.data;
      }
    });
  }

  deleteProduct(id: string) {
    const confirm = window.confirm('Are you sure you want to delete???');
    if (confirm) {
      this.productsService.handleDeleteProduct(id).subscribe((res) => {
        this.productsService.listChange.next({ action: 'action_delete' });
      });
    }
  }

  loadProduct(data: any) {
    this.openModel();
    this.productsService.listChange.next({ ...data, action: 'edit' });
  }

  openModel() {
    this.isModelOpen = true;
  }
  closeModel() {
    this.isModelOpen = false;
  }
}
