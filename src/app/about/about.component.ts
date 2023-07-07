/* 
  File name: about.component.ts
  Student’s Name: Lok Yan Lee
  StudentID: 301233707
  Date: 12 Jun 2023
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Contextual variable names are used for clarity
  name: string;
  studentNumber: number;
  background: string;
  favouriteThings: string[];

  constructor() {
    // User's full name
    this.name = 'Lee Lok Yan';
    // User's student number
    this.studentNumber = 301233707;
    // User's background information
    this.background = 'Prior to my study...';
    // User's favourite activities
    this.favouriteThings = ['Snowboarding', 'Watching Movie', 'Eating', 'Biking'];
  }
}
