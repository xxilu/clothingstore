import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = ''
  errorMessage: string = ''


  constructor(private router: Router, private authenticationService: AuthenticationService, private http: HttpClient) { }
  ngOnInit(): void {
    this.authenticationService.LogOut();
  }
  onLogIn(form: NgForm) {
    const customer = {
      phoneNumber: form.value.userName.toString().trim(),
      password: form.value.password.toString().trim()
    }

    this.authenticationService.Login(customer).subscribe(
      (response) => {
        this.router.navigate(['home-page'])
          this.name = response.name;
          this.authenticationService.customerInfo = response;
          this.authenticationService.customerLoginState = true;
          this.authenticationService.customerStated.emit(this.authenticationService.customerLoginState);
          this.authenticationService.userLogin = this.name;
          this.authenticationService.userLoginEmitter.emit(this.authenticationService.userLogin);
      }
    )
    
    // else {
    //   // Đăng nhập thất bại
    //   console.log('Đăng nhập thất bại. Vui lòng kiểm tra lại tên người dùng và mật khẩu.');

    // }

    // this.authenticationService.Login(customer).subscribe(
    //   (response) => {
    //     if(response.message == 'Admin Status Success!') {
    //       this.authenticationService.adminLoginState = true
    //       this.authenticationService.adminStated.emit(this.authenticationService.adminLoginState)
    //       alert("Đăng nhập admin thành công!")
    //       this.router.navigate(['admin'])
    //     }
    //     else {
    //       this.router.navigate([''])
    //       this.name = response.name;
    //       this.authenticationService.customerInfo = response;
    //       this.authenticationService.customerLoginState = true;
    //       this.authenticationService.customerStated.emit(this.authenticationService.customerLoginState);
    //       this.authenticationService.userLogin = this.name;
    //       this.authenticationService.userLoginEmitter.emit(this.authenticationService.userLogin);
    //     }
    //   },
    //   (error) => {
    //     // Xử lý lỗi kết nối hoặc lỗi xác thực
    //     this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng';
    //   }
    // )
    // this.router.navigate([''])
  }

}
