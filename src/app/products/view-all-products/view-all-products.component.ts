import { Component, OnInit } from '@angular/core';
import { SproutService } from '../sprout.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList:any;

  categoryList:any;

  SearchItem:any;

  constructor(private service:SproutService) { }

  ngOnInit(): void {

    this.service.viewallproducts().subscribe((data)=>{
      this.productList=data
      //console.log(this.productList);
    })
  }

  categorysearch(category:any)
  {
    this.categoryList=this.productList.filter((item:any)=>{
      if(category==''||category==item.categoryId)
      {
        return item
      }
    })
  }

}
