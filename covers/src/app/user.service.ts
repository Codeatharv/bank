import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  private url="http://localhost:3000/user"

  constructor(private userdata: HttpClient) { }

  setuser(id:any,data:any):Observable<any>{
    return this.userdata.put(this.url+"/"+id,data);
      }
    
      getuser():Observable<any>{
        return this.userdata.get(this.url);
      } 

}
