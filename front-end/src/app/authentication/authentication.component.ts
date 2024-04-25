import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit{
  logged: boolean = false;
  email: string = "";
  username: string = "";
  password: string = "";
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    const access = localStorage.getItem("access");
    if (access) {
      this.logged = true;
      console.log(this.logged)
    }
  }

  login() {
    this.authService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.logged = true;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
      },(error)=>{
        alert('Please, enter the correct data!')
      })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  signup() {
    this.authService.signup(this.email, this.username, this.password)
      .subscribe(() => {
        // Optionally handle success (e.g., show a success message)
        console.log("User signed up successfully");
      }, (error) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Error signing up user:", error);
      });
  }
}


// import {Component, OnInit} from '@angular/core';
// import {FormsModule} from "@angular/forms";
// import {CommonModule} from "@angular/common";
// import {AuthService} from "../services/auth.service";
// import {error} from "@angular/compiler-cli/src/transformers/util";
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-authentication',
//   standalone: true,
//   imports: [
//     FormsModule, CommonModule
//   ],
//   templateUrl: './authentication.component.html',
//   styleUrl: './authentication.component.css'
// })
// export class AuthenticationComponent implements OnInit{
//   logged: boolean = false;
//   email: string = "";
//   username: string = "";
//   password: string = "";

//   currentUrl: string | undefined;

//   constructor(private authService: AuthService, public router: Router, private route: ActivatedRoute) {
//   }
//   ngOnInit() {

//       // Get the current route URL
//       this.currentUrl = this.router.url;

//       // You can also access route parameters using ActivatedRoute
//       // For example, if you have a route parameter named 'id'
//       this.route.params.subscribe(params => {
//         const id = params['id'];
//         // Do something with the 'id'
//       });
//       if (this.authService.getLogged()) {
//         this.router.navigate(['/']); // Navigate to home page if logged in
//       }


//     const access = localStorage.getItem("access");
//     if (access) {
//       // this.logged = true;
//       this.authService.setLogged(true);
//     }
//   }

//   login() {
//     this.authService
//       .login(this.username, this.password)
//       .subscribe((data) => {
//         // this.logged = true;
//         this.authService.setLogged(true);
//         localStorage.setItem("access", data.access);
//         localStorage.setItem("refresh", data.refresh);
//       },(error)=>{
//         alert('Please, enter the correct data!')
//       })
//   }

//   logout() {
//     // this.logged = false;
//     this.authService.logout();
//     localStorage.removeItem("access");
//     localStorage.removeItem("refresh");
//   }

//   signup() {
//     this.authService.signup(this.email, this.username, this.password)
//       .subscribe(() => {
//         // Optionally handle success (e.g., show a success message)
//         console.log("User signed up successfully");
//       }, (error) => {
//         // Optionally handle error (e.g., show an error message)
//         console.error("Error signing up user:", error);
//       });
//   }

//   getLogged(): boolean {
//     return this.authService.getLogged();
//   }
// }

