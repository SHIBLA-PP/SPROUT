import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { AdminViewAllProductsComponent } from '../admin/admin-view-all-products/admin-view-all-products.component';
import { AdminViewComponentComponent } from '../admin/admin-view-component/admin-view-component.component';
import { DeleteProductComponent } from '../admin/delete-product/delete-product.component';
import { UpdateProductComponent } from '../admin/update-product/update-product.component';

import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'add-product' , component: AddProductComponent },
  { path:'update-product/:id' , component: UpdateProductComponent },
  { path: 'delete-product/:id' , component:DeleteProductComponent },
  { path:'admin-dashboard' , component: AdminDashboardComponent },
  { path:'admin-view-product/:id' , component: AdminViewComponentComponent },
  { path: 'admin-view-all-product' , component:AdminViewAllProductsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
