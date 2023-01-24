import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SproutService } from 'src/app/products/sprout.service';

@Component({
  selector: 'app-admin-view-component',
  templateUrl: './admin-view-component.component.html',
  styleUrls: ['./admin-view-component.component.css']
})
export class AdminViewComponentComponent implements OnInit {
  pid:any
  pdetails:any

  constructor(private service:SproutService , private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((data)=>{
      this.pid=data['id']
      console.log(this.pid);
    })

    this.service.viewproductuser(this.pid).subscribe((data)=>{
      this.pdetails=data
      console.log(this.pdetails);
    })
  }

}
