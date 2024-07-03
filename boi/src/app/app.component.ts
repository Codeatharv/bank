import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'boi';
  user:any={};
  users:any[]=[];
  ngOnInit(): void {
      this.db.getUser().subscribe(u=>{
        this.users=u; 
      })
  }

  constructor(private db:DbService){}

  add(){
    this.db.addUser(this.user).subscribe(u=>{
      alert("Success!");
      this.ngOnInit();

    })
  }
}


