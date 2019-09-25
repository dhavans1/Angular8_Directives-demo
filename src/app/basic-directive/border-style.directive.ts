import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[greenBorder]'
})

export class borderStyleDirective implements OnInit{
    constructor(private element: ElementRef){

    }

    ngOnInit(){
        this.element.nativeElement.style.borderColor = "rgb(124, 221, 33)";
    }
}