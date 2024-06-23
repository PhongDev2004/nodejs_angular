import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  @Output() onCloseModel = new EventEmitter();
  productForm!: FormGroup;
  action!: string;
  id!: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      brand: new FormControl(''),
      price: new FormControl(''),
      stock: new FormControl(''),
      thumbnail: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
    });
    this.productsService.listChange.subscribe((res) => {
      if (res) {
        this.action = res.action;
        this.id = res._id;
        this.productForm.patchValue({
          name: res.name,
          brand: res.brand,
          price: res.price,
          stock: res.stock,
          thumbnail: res.thumbnail,
          category: res.category,
          description: res.description,
        });
      }
    });
  }

  onSubmit() {
    if (this.action === 'edit') {
      this.productsService
        .handleEditProduct(this.id, this.productForm.value)
        .subscribe((res) => {
          if (res) {
            this.onClose();
            this.productsService.listChange.next('action_edit');
          }
        });
    } else {
      this.productsService
        .handleCreateProduct(this.productForm.value)
        .subscribe((res) => {
          this.onClose();
          this.productsService.listChange.next('action_add');
        });
    }
  }

  onClose() {
    this.onCloseModel.emit(false);
    this.productForm.reset();
  }
}
