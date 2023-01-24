import { Component, OnInit } from '@angular/core';
import { SproutService } from 'src/app/products/sprout.service';

@Component({
  selector: 'app-admin-view-all-products',
  templateUrl: './admin-view-all-products.component.html',
  styleUrls: ['./admin-view-all-products.component.css']
})
export class AdminViewAllProductsComponent implements OnInit {

  productlist:any

  constructor(private service:SproutService) { }

  ngOnInit(): void {
    this.service.viewallprdctadmin().subscribe((data)=>{
     this.productlist=data
    })
  }

}
