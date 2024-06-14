import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeWindowComponent} from "./home-window/home-window.component";
import {AboutMeWindowComponent} from "./about-me-window/about-me-window.component";
import {
  ProfessionalExperienceWindowComponent
} from "./professional-experience-window/professional-experience-window.component";
import {EducationWindowComponent} from "./education-window/education-window.component";
import {ContactWindowComponent} from "./contact-window/contact-window.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeWindowComponent
  },
  {
    path: 'about-me',
    component: AboutMeWindowComponent
  },
  {
    path: 'professional-experience',
    component: ProfessionalExperienceWindowComponent
  },
  {
    path: 'education',
    component: EducationWindowComponent
  },
  {
    path: 'contact',
    component: ContactWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
