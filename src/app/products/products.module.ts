import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AdminModule } from '../admin/admin.module';
import { SearchFilterPipe } from './sharedpipe/search-filter.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AdminModule
  ],
  exports: [
    ProductsComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    SearchFilterPipe
  ]
})
export class ProductsModule { }
