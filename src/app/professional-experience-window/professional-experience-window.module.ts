import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProfessionalExperienceWindowComponent} from "./professional-experience-window.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonComponentsModule} from "../common/common-components.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [ProfessionalExperienceWindowComponent],
    imports: [
        CommonModule,
        DragDropModule,
        NgOptimizedImage,
        CommonComponentsModule,
        RouterLink
    ],
  exports: [
    ProfessionalExperienceWindowComponent
  ]
})
export class ProfessionalExperienceWindowModule {
}
