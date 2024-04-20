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
