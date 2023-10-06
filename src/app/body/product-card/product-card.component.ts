import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() prodID : number = 0;
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductListAPI().subscribe(prod => {
    this.products = prod;
    })
  }
}

