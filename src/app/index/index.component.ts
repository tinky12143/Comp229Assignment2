/* 
  File name: index.component.ts
  Student’s Name: Lok Yan Lee
  StudentID: 301233707
  Date: 12 Jun 2023
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  // Contextual variable names are used for clarity
  mission: string[];

  constructor() {
    //My mission
    this.mission = [
      'Experienced District Supervisor at Medtronic®, responsible for promoting neuro modulation programming and neurovascular products in Hong Kong.',
      'Witnessed the industry\'s shift towards digitalization and programming-driven platforms, particularly in medical devices such as surgical navigation systems, anesthesia machines, and robotic-assisted surgical devices.',
      'Seeking practical, advanced programming courses to bridge the skills gap and further advance your career, with a willingness to work from any location.'
    ];
  }
}
