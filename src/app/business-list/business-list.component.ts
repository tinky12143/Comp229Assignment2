import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css'],
})
export class BusinessListComponent implements OnInit {
  business: any[] = [];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.authService.getBusiness().subscribe((res) => {
      this.business = res.businessContact;
      console.log(this.business);
    });
  }

  deleteBusiness(id: string) {
    this.httpClient.delete('/business/contact/' + id).subscribe((res) => {
      const newBusiness = this.business.filter(
        (business) => business._id != id
      );
      this.business = newBusiness;
    });
  }
}
