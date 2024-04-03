import { Component } from "@angular/core";





@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ['./product.component.scss']
})
export class ProductComponent{
    productName : string = "Samsung";
    productId : string = "P-123"
}



