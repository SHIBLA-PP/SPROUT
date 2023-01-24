import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SproutService } from 'src/app/products/sprout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname=""
  pswd=""
  constructor(private service:SproutService,private router:Router) { }

  ngOnInit(): void {
  }

  uchange(event:any)
  {
    this.uname=event.target.value
    console.log(this.uname);
  }

  pswdchange(event:any)
  {
    this.pswd=event.target.value
    console.log(this.pswd);
  }

  login()
  {
    var uname=this.uname
    var pswd=this.pswd
    if(uname=="ADMIN" && pswd=="12345")
    {
    alert('Login Successfull')
    this.router.navigateByUrl('admin/admin-dashboard')
    }
    else{
      alert('Incorrect Username or Password')
      this.router.navigateByUrl('login')
    }
  }

}
