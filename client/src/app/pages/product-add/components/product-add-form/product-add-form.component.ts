import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product-add-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-add-form.component.html',
  styleUrl: './product-add-form.component.css'
})
export class ProductAddFormComponent {
  constructor(private productService: ProductService) { }

  productAddForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(99),
    price: new FormControl(0),
    quantity: new FormControl(0)
  });

  submitForm() {
    const formValue = this.productAddForm.value;

    const categoryValue = Number(formValue.category);

    const product: Product = {
      ProductName: formValue.name || '',
      ProductDescription: formValue.description || '',
      ProductCategory: categoryValue || 99,
      ProductPrice: formValue.price || 0,
      ProductQuantity: formValue.quantity || 0
    }

    this.productService.addProduct(product)
      .subscribe({
        next: () => {
          console.log("Product Added.");
        },
        error(err) {
          console.log("There is an error: ", err);
        },
        complete: () => {
          this.productAddForm.reset({
            name: '',
            description: '',
            category: 99,
            price: 0,
            quantity: 0
          });
        }
      })
  }
}
