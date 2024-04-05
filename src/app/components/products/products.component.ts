import { Component, OnInit } from "@angular/core";





@Component({
   selector : "app-products",
   templateUrl : './products.component.html',
   styleUrls : ['./products.component.scss'] 
})
export class ProductsComponent implements OnInit{
   isDisable : boolean = true ;
   cartProductStatus : string = `No Product is added to the cart.`;
   noOfProductsAdded : number = 0;
   searchedProduct : string = 'No Product Is Searched yet !!!';
   ngOnInit(): void {
      setTimeout(() => {
         this.isDisable = false;
      },3000)
   }

   updateCartStatus(){
      console.log('Clicked !!!');
      this.noOfProductsAdded++;
      this.cartProductStatus = `${this.noOfProductsAdded} Product are added to the cart !!!`
   }

   updatedProductsNumber(){
      this.noOfProductsAdded--;
      this.cartProductStatus = `${this.noOfProductsAdded} Product are added to the cart !!!`
   }

   onProductSearch(eve : Event){
      let val = (eve.target as HTMLInputElement).value;
      console.log(val);
      this.searchedProduct = val;
   }
}

