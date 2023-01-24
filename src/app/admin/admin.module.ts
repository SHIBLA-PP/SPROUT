import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminViewComponentComponent } from './admin-view-component/admin-view-component.component';
import { AdminViewAllProductsComponent } from './admin-view-all-products/admin-view-all-products.component';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { ProductsModule } from '../products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AdminDashboardComponent,
    AdminViewComponentComponent,
    AdminViewAllProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AdminDashboardComponent,
    AdminViewComponentComponent,
    AdminViewAllProductsComponent

  ]
})
export class AdminModule { }
