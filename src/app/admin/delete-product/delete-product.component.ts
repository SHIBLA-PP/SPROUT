import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SproutService } from 'src/app/products/sprout.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  pid:any

  constructor(private service:SproutService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.pid=data['id']
      console.log(this.pid);
    })
    this.service.DeleteProduct(this.pid).subscribe((data)=>{
      alert('Product deleted successfully')
      this.router.navigateByUrl('admin/admin-view-all-product')
    })
  }
  
}
