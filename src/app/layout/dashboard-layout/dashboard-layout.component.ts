import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  currentUser: string = '';
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    /*
    this.authService.getCurrentUser().then(res =>{
      this.currentUser = res.email;
    });
    */
   }

   async onLogout() {
    try {
      await this.authService.logoutUser();
      this.router.navigate(['web']);
    } catch (error) {
      console.log(error);
    }
  }

}
