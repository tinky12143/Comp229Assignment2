/* 
  File name: navbar.component.ts
  Student’s Name: Lok Yan Lee
  StudentID: 301233707
  Date: 12 Jun 2023
*/

import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  login: boolean = false;
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.getCheckLogin();
  }
}
