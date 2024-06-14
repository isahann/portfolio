import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactWindowComponent} from "./contact-window.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonComponentsModule} from "../common/common-components.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [ContactWindowComponent],
    imports: [
        DragDropModule,
        CommonModule,
        CommonComponentsModule,
        RouterLink,
    ],
  exports: [ContactWindowComponent],
})
export class ContactWindowModule {
}
