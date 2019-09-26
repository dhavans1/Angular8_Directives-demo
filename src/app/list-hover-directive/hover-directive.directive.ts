import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[hoverTransparent]'
})

export class mouseHoverDirective implements OnInit{
    previousColor: string;
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }

    ngOnInit(){
        this.backgroundColor = this.previousColor = this.elRef.nativeElement.style.backgroundColor;
    }
    
    @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') onmouseOver(){
        this.backgroundColor = 'transparent';
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.backgroundColor = this.elRef.nativeElement.style.backgroundColor = this.previousColor;
    }
    
}