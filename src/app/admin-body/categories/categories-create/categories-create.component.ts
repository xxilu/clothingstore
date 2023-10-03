import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {
  notification = ""
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    // this.productService.getCategoryListAPI().subscribe(cate => this.cateLst = cate)
  }
  CreateCate(f: NgForm) {
    if (f.value.ProductName != ''
      //  &&  f.value.price != '' && f.value.amount != '' && f.value.productIntroduction != '' 
    ) {

      const dataProd = {
        CategoryName: f.value.CategoryName,
        createdDate: f.value.CreatedDate,
      }
      console.log(dataProd)

      this.productService.postCategory(dataProd).subscribe()
      alert('Thêm danh mục thành công')
    

      this.router.navigate(['/products']);
    }
    else {
      this.notification = "Vui lòng nhập đầy đủ thông tin"
    }
  }
}

