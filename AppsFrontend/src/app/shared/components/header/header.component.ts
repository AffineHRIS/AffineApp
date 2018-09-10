import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderForm } from './headerform.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    role: string = sessionStorage.getItem('userRole');
    employeeName: string = sessionStorage.getItem('empname');
    username: string = sessionStorage.getItem('username');
    employeedetail: string = '';
    headername: any;
    currentURL : any;
    constructor( public router: Router ) {

    }

    ngOnInit(): void {
      this.currentURL = window.location.hash;
      if(this.currentURL == "#/parkingmanagement" ) {
          this.headername = 'Parking Management System';
      }
      else if (this.currentURL == '#/chatbot' || this.currentURL == '#/chatbotbank') {
          this.headername = 'A³SP Chatbot '
      }
      else {
          this.headername = 'A³SP – Affine Advanced Analytics Solution Platform';
      }
    }

    onLoggedout() {
        sessionStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }

    showProfile(model: HeaderForm) {

        if( this.role === '1' ) {
            this.router.navigate(['/basic', model.employeedetail]);
        }

        this.employeedetail = '';

    }

}
