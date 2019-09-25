import { Directive, OnInit, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector: '[better-Highlighter]'
})

export class betterHighlighter implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }

    ngOnInit(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgb(163, 206, 245)');
    }
}