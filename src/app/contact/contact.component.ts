/* 
  File name: contact.component.ts
  Student’s Name: Lok Yan Lee
  StudentID: 301233707
  Date: 12 Jun 2023
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Contextual variable names are used for clarity
  contactNumber: string;
  email: string;

  constructor() {
    //My contact and email
    this.contactNumber = '( +1 ) 647-939-6810';
    this.email = 'llee113@my.centennialcollege.ca';
  }
}
