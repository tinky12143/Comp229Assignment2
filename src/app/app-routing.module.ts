import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { Guard } from './login/guard.guard';
import { LoginComponent } from './login/login.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { UpdateBusinessComponent } from './update-business/update-business.component';

// Import other components...

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: IndexComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'business-page',
    component: BusinessListComponent,
    canActivate: [Guard],
  },
  {
    path: 'business-update/:id',
    component: UpdateBusinessComponent,
    canActivate: [Guard],
  },

  // Add other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
