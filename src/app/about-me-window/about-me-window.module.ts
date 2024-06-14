import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AboutMeWindowComponent} from "./about-me-window.component";
import {WhoAmIComponent} from './who-am-i/who-am-i.component';
import {WhatDoIDoComponent} from './what-do-i-do/what-do-i-do.component';
import {WhatDoIKnowComponent} from './what-do-i-know/what-do-i-know.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonComponentsModule} from "../common/common-components.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [AboutMeWindowComponent, WhoAmIComponent, WhatDoIDoComponent, WhatDoIKnowComponent],
    imports: [
        DragDropModule,
        NgOptimizedImage,
        CommonComponentsModule,
        CommonModule,
        RouterLink
    ],
  exports: [AboutMeWindowComponent]
})
export class AboutMeWindowModule {
}
