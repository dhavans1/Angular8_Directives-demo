import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { borderStyleDirective } from './basic-directive/border-style.directive';
import { betterHighlighter } from './better-directive/better-directive.directive';
import { mouseHoverDirective } from './list-hover-directive/hover-directive.directive';
import { buttonHoverDirective } from './button-hover-directive/buttonHover.directive';
import { customStructuralDirective } from './custom-ngIf-directive/custom-ngIf.directive';

@NgModule({
  declarations: [
    AppComponent,
    borderStyleDirective,
    betterHighlighter,
    mouseHoverDirective,
    buttonHoverDirective,
    customStructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
