import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {
    this.ProductService.getproduct().subscribe(x => this.products=x);


    this.UserService.getuser().subscribe(x => { this.users=x;
    let myuser=this.users.find(user=> user.id==1);
  this.cart=myuser.cart
});


    
  }
  constructor(private ProductService:ProductService, private UserService:UserService) { }

  products:any[]=[]
  users:any[]=[]
  cart:any[]=[]

  add(id:any){
    
     let product = this.products.find(p => p.id==id);
     this.cart.push(product);

     let newcart = {'cart':this.cart}
     this.UserService.setuser(1,newcart).subscribe(x => {
      this.ngOnInit();  
      alert("your cart is updated") });

}
}

