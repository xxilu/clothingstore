import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  //category_dropdown: Categories[] = [];
  totalCart: number = 0;
  customerName: string = ''
  customerState: boolean = false;
  constructor(private productService: ProductService, private router: Router, private authenticationService: AuthenticationService) {}
  ngOnInit(): void {
    // this.totalCart = this.shoppingCartService.GetTotalCart();
  

    this.authenticationService.userLoginEmitter.subscribe((event) => {
      this.customerName = event
    })
    this.authenticationService.customerStated.subscribe((event) => {
      this.customerState = event
    })
    
    // this.cartService.cartQuantityChanged.subscribe(count => {
    //   this.totalCart = count;
    // })
  }

  SearchSubmit(form:NgForm){
    // alert(form.value.search_string);
    const searchString = form.value.search_string;
    console.log(searchString);
    form.reset();
    this.router.navigate(['/search', searchString]);
    
  }

  // onLogOut() {
  //   this.authenticationService.LogOut();
  // }

  // onOrderList() {
  //   this.router.navigate(['order-list'])
  // }

}
