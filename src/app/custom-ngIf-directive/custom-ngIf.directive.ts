import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Directive({
    selector: '[customNgIf]'
})

export class customStructuralDirective{
    constructor(private templateRef: TemplateRef<any>, private viewConRef: ViewContainerRef){

    }

    @Input() set customNgIf(condition: boolean){
        if(condition)  
            this.viewConRef.createEmbeddedView(this.templateRef) 
        else
            this.viewConRef.remove(0);
    }

}