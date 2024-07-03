import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private url='http://localhost:3000/products'

  constructor(private http:HttpClient) { }

  setproduct(id:any,data:any):Observable<any>{
return this.http.put(this.url+"/"+id,data);
  }

  getproduct():Observable<any>{
    return this.http.get(this.url);
  } 
}
