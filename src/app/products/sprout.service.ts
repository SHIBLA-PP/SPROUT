import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SproutService {

  constructor(private http:HttpClient) { }

  // API CALLS

  viewallproducts()
  {
    return this.http.get('http://localhost:3000/sprout')
  }
  
  viewallprdctadmin()
  {
    return this.http.get('http://localhost:3000/sprout')
  }

  viewproductuser(productId:any)
  {
    return this.http.get('http://localhost:3000/sprout/'+productId)
  }

  addnewproduct(pbody:any)
  {
    return this.http.post('http://localhost:3000/sprout/',pbody)
  }

  updateproduct(pid:any,pbody:any)
  {
    return this.http.put('http://localhost:3000/sprout/'+pid,pbody)
  }

  DeleteProduct(productId:any)
  {
    return this.http.delete('http://localhost:3000/sprout/'+productId)
  }

}
