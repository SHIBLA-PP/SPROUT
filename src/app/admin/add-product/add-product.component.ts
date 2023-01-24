import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SproutService } from 'src/app/products/sprout.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = this.formBuilder.group({

      id:[''],
      productName:[''],
      categoryId:[''],
      description: [''],
      price:[''],
      is_available:[''], 
      productImg:['']

  })

  constructor(private formBuilder:FormBuilder,private service:SproutService,private route:Router) { }

  ngOnInit(): void { }
  
  addnewproduct()
  {
    var newproduct={
      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryId:this.addProductForm.value.categoryId,
      description:this.addProductForm.value.description,
      price:this.addProductForm.value.price,
      is_available:this.addProductForm.value.is_available,
      productImg:this.addProductForm.value.productImg
    }
    this.service.addnewproduct(newproduct).subscribe((data)=>{
      {
        alert('Product added successfully')
        this.route.navigateByUrl('admin/admin-view-all-product')
      }
    })
  }

}
