import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private url='http://localhost:3000/user'

  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any>{
    return this.http.post(this.url,user);
  }

  getUser():Observable<any>{
    return this.http.get(this.url);
  }

  updateuser(id:any,user:any):Observable<any>{
    return this.http.put(this.url+'/'+id,user);
  }

  deleteuser(id:any):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }

 

}
