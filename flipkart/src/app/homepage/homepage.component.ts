import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title = 'flipkart';

  constructor(private product:ProductserviceService){}
  ngOnInit(): void {
      this.product.getproduct().subscribe(user =>{
        this.products=user;
      });;
  }

  count:any= 0;
  counter(id:any){
    let products = this.products.find(product => product.id==id);
    alert(products.name)
  }
  products:any[]=[
    
  ]
  
}
