import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  status = [{ id: 0, description: "ENTRADA" }, { id: 1, description: "SALIDA" }, { id: 2, description: "DEFECTUOSO" }];
  formProduct: FormGroup = this.fb.group({
    State: "",
    Name: "",
  });
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NewComponent>, private _productServise: ProductsService) { }

  ngOnInit(): void {
  }

  onAdd() {
    let addProduct = {
      State: this.State?.value, Name: this.description?.value
    };
    this._productServise.AddProduct(addProduct).subscribe(x => {
    });
  }

  get State() {
    return this.formProduct.get("State");
  }

  get description() {
    return this.formProduct.get("Name");
  }
}
