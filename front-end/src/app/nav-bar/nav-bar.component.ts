// import { Component } from '@angular/core';
// import {RouterModule} from "@angular/router";

// @Component({
//   selector: 'app-nav-bar',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './nav-bar.component.html',
//   styleUrl: './nav-bar.component.css'
// })
// export class NavBarComponent {

// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  router: any;
  constructor(private authService: AuthService){}


  getLogged(): boolean {
    return this.authService.getLogged();
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    this.router.navigate(['/']);
  }
}

