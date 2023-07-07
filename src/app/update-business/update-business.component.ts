import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.css'],
})
export class UpdateBusinessComponent implements OnInit {
  @ViewChild('form') signupForm: NgForm | undefined;
  businessId: string = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.businessId = params['id'];
    });
  }

  update() {
    this.authService.updateBusiness(
      this.businessId,
      this.signupForm?.value.name,
      this.signupForm?.value.number,
      this.signupForm?.value.email
    );
    this.router.navigate(['/business-page']);
    console.log(this.businessId);
  }

  cancel() {
    this.router.navigate(['/business-page']);
  }
}
