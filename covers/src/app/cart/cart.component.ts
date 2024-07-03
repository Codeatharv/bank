import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{


  ngOnInit(): void {
    this.ProductService.getproduct().subscribe(x => this.products=x);


    this.UserService.getuser().subscribe(x => { this.users=x;
    let myuser=this.users.find(user=> user.id==1);
  this.cart=myuser.cart
});


    
  }
  constructor(private UserService: UserService, private ProductService:ProductService){}

  cart:any[]=[] 
  products:any[]=[]
  users:any[]=[]
delete(cartitem:any){
  this.cart= this.cart.filter(x=>x!=cartitem);
  this.UserService.setuser(1,{'cart':this.cart}).subscribe(x=>{this.ngOnInit();
    alert('deleted')
  }
)
}
 


}
