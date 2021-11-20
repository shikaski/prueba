import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cartProducts:any[]=[];

  constructor() {}

  addProductToCart(product:any){
    this.cartProducts=[...this.cartProducts, product]
    console.log(this.cartProducts)
  }

  getCartLength(){
    return this.cartProducts.length;
  }

  getCartProducts(){
    return this.cartProducts
  }
  removeProductFromCart(id:number){
    this.cartProducts = this.cartProducts.filter((product)=>product.id !==id);
    console.log(this.cartProducts)
  }
}
