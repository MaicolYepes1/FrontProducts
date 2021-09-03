import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/product';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 url:string = "https://localhost:44341";
  constructor(private http:HttpClient) { }

  getProducts(){
    let endPoint = this.url + '/api/Product/GetAllProducts';
    
    return this.http.get<Response>(endPoint);
  }

  updateProduct(Product : Products){
    let endPoint = this.url + '/api/Product/UpdateProduct';
    
    return this.http.put<Response>(endPoint, Product);
  }

  AddProduct(Product : Products){
    let endPoint = this.url + '/api/Product/AddProducts';    
    return this.http.post<Response>(endPoint, Product);
  }
}
