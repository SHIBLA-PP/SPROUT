import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SproutService } from '../sprout.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId:any
  productDetails:any

  constructor(private service:SproutService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data)=>{
      this.productId=data['id']
      console.log(this.productId)

    })
    
    this.service.viewproductuser(this.productId).subscribe((data)=>{
      this.productDetails=data
      console.log(this.productDetails);
    })
     
    

  }

}
