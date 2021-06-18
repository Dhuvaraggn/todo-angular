import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[colordirective]'
})
export class colordirective implements OnInit
{
    constructor(private eleRef:ElementRef,
        private renderer:Renderer2
    ){
    }
    ngOnInit()
    {
        this.renderer.setStyle(this.eleRef.nativeElement,'color','red')
    }
}