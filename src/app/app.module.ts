import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { BusinessListComponent } from './business-list/business-list.component';
import { SortContactsPipe } from './sort.pipe';
import { UpdateBusinessComponent } from './update-business/update-business.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    IndexComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    BusinessListComponent,
    SortContactsPipe,
    UpdateBusinessComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
