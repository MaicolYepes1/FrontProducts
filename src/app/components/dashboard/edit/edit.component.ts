import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  status = [{ id: 0, description: "ENTRADA" }, { id: 1, description: "SALIDA" }, { id: 2, description: "DEFECTUOSO" }];
  formProduct: FormGroup = this.fb.group({
    State: this.data.state,
    Name: this.data.name,
    IdProduct: this.data.idProduct
  });
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _productServise: ProductsService,) { }

  ngOnInit(): void {
    this.data;
  }

  onUpdate() {
    let productUpdate = {
      IdProduct: this.idProduct?.value, State: this.State?.value, Name: this.description?.value
    };
    this._productServise.updateProduct(productUpdate).subscribe(x => {
      
    });
  }
  get State() {
    return this.formProduct.get("State");
  }

  get description() {
    return this.formProduct.get("Name");
  }

  get idProduct() {
    return this.formProduct.get("IdProduct");
  }
}
