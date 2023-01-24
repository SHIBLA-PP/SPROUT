import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SproutService } from 'src/app/products/sprout.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  pid:any
  pdetails:any
  constructor(private activateRoute:ActivatedRoute,private service:SproutService,private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data)=>{
      this.pid=data['id']
      console.log(this.pid);

    })

    this.service.viewproductuser(this.pid).subscribe((data)=>{
      this.pdetails=data
      console.log(this.pdetails)
    })
  }
  updateproduct(form:any)
  {
    var updateproduct={
      id:form.value.id,
      productName:form.value.productName,
      categoryId:form.value.categoryId,
      description:form.value.description,
      price:form.value.price,
      is_available:form.value.is_available,
      productImg:form.value.productImg
    }
    console.log(updateproduct);
    this.service.updateproduct(this.pid,updateproduct).subscribe((data)=>{
      alert('Product updated successfully')
      this.router.navigateByUrl('admin/admin-view-all-product')
    })
  }

}
