import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Products } from '../../interfaces/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Response } from 'src/app/interfaces/Response';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaProductos: Products[] = [];
  displayedColumns: string[] = ['idProduct', 'name', 'state', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _productServise: ProductsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.dataSource.paginator = this.paginator;
  }

  getAllProducts() {
    this._productServise.getProducts().subscribe((result: Response) => {
      this.listaProductos = result.result;
      this.dataSource = new MatTableDataSource(this.listaProductos);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element: Products) {
    const dialogRef = this.dialog.open(EditComponent,
      { data: element });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    });
    
  }

  addNewProduct()
  {
    
    const dialogRef = this.dialog.open(NewComponent);
    dialogRef.afterClosed().subscribe(result => {
       this.getAllProducts();
    });
  }
}
