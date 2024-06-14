import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeWindowModule} from "./about-me-window/about-me-window.module";
import {
  ProfessionalExperienceWindowModule
} from "./professional-experience-window/professional-experience-window.module";
import {EducationWindowModule} from "./education-window/education-window.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ContactWindowModule} from "./contact-window/contact-window.module";
import { HomeWindowComponent } from './home-window/home-window.component';
import {CommonComponentsModule} from "./common/common-components.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeWindowModule,
    ProfessionalExperienceWindowModule,
    EducationWindowModule,
    ContactWindowModule,
    NoopAnimationsModule,
    CommonComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
