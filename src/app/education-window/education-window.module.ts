import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EducationWindowComponent} from "./education-window.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonComponentsModule} from "../common/common-components.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    EducationWindowComponent,
  ],
    imports: [
        CommonModule,
        DragDropModule,
        NgOptimizedImage,
        CommonComponentsModule,
        RouterLink
    ],
  exports: [
    EducationWindowComponent
  ]
})
export class EducationWindowModule {
}
