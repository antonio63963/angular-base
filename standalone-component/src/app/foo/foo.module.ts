import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { FooChildComponent } from './foo-child/foo-child.component';



@NgModule({
  declarations: [
    FooComponent,
    FooChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooComponent,
  ]
})
export class FooModule { }
