import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FooModule,
    BarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
