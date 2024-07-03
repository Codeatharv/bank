import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddcartComponent } from './addcart/addcart.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path:'addcart', component:AddcartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
