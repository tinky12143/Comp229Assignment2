/* 
  File name: services.component.ts
  Student’s Name: Lok Yan Lee
  StudentID: 301233707
  Date: 12 Jun 2023
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  // Contextual variable names are used for clarity
  services: string[];

  constructor() {
    //My services
    this.services = [
      'Website Development',
      'Android app Development',
      'Database development'
    ];
  }

}
