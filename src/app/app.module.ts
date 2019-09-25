import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { borderStyleDirective } from './basic-directive/border-style.directive';
import { betterHighlighter } from './better-directive/better-directive.directive';
import { mouseHoverDirective } from './hover-directive/hover-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    borderStyleDirective,
    betterHighlighter,
    mouseHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
