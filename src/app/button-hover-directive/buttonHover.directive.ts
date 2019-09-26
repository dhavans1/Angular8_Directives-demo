import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[hoverColorChange]'
})

export class buttonHoverDirective{
    previousColor: string;
    hoverColor: string;

    constructor(private elref: ElementRef, private renderer: Renderer2){
        this.previousColor = elref.nativeElement.style.backgroundColor;
        this.hoverColor = '#dabdbd';
    }

    @HostBinding('style.backgroundColor') backgroundColor;

    @HostListener('mouseenter') setBackgroundColor(){
        this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor', this.hoverColor);
    }

    @HostListener('mouseleave') resetBackgroundColor(){
        this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor', this.previousColor);
    }
}