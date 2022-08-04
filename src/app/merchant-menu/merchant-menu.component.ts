import { Component, OnInit } from '@angular/core';
import {cart, menu, Quantity} from "../menu/menu.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MenuServiceService} from "../menu-service.service";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-merchant-menu',
  templateUrl: './merchant-menu.component.html',
  styleUrls: ['./merchant-menu.component.css']
})
export class MerchantMenuComponent implements OnInit {

  model:menu[];

  modalCart:cart={
    quantity1:0,
    quantity2:0,
    quantity3:0
  };

  values:Quantity[] = [];

  constructor(private http:HttpClient, private router:Router,private menuService:MenuServiceService,
              public _DomSanitizationService: DomSanitizer ) { }

  ngOnInit() {
    if (sessionStorage.getItem("userData") == null) {
      this.router.navigate(['login']);
    }
    this.getItems();
  }

  clearLocal(){
    sessionStorage.clear();
  }

  getItems():void{
    this.menuService.getItems().subscribe((men: any[]) => {
      this.model = men;
      for (let i=0;i<this.model.length;i++){
        this.values.push(new Quantity());
        this.values[i].quantity=0;
      }
    });
  }

  getTotal():void{
    let url = this.menuService.path + "/addToCart";
    this.modalCart.quantity1=this.values[0].quantity;
    this.modalCart.quantity2=this.values[1].quantity;
    this.modalCart.quantity3=this.values[2].quantity;
    this.http.post<number>(url,this.values).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        alert("Error adding items to cart");
      }
    )

  }

  id:any = null;
  update(e) {
    this.id = e.target.value;
  }

  deleteItem() : void {
    let url = this.menuService.path + "/deleteItem";
    const formData = new FormData();
    formData.append('id', this.id);
    this.http.post<String>(url,formData)
    .subscribe(
      res=>
      {
        console.log(this.id);
        alert("Item Deleted Successfully!");
      },err=>{
        alert("Failed to Delete item. Please Try after sometime!");
      }
    )
    

  }


}

