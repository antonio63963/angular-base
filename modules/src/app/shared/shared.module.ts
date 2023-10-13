import { NgModule } from "@angular/core";
import { ColorDirective } from "./color.directive";
import { PageNamePipe } from "./page-name.pipe";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe
  ],
  exports: [
    ColorDirective,
    PageNamePipe
  ]
})
export class SharedModule {}