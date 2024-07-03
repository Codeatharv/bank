import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private url='http://localhost:3000/product';

  constructor(private http: HttpClient) {
   }

   
  updateCounter(id:any, data:any):Observable<any> {
    {
return this.http.put(this.url+'/',id,data)
  }
}

getproduct():Observable<any>{
  return this.http.get(this.url);
}


}
