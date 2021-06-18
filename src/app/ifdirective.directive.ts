import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive(
    {selector:'[ifdirective]'}
)
export class ifdirective
{
    private hasView=false;
    constructor(private templateRef:TemplateRef<any>,
                private viewContainer:ViewContainerRef)
                {
                }
    @Input() set ifdirective(condition:boolean)
    {
        if(condition)
        {
            console.log("ifdirective is true")
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else
        {
            this.viewContainer.clear();
        }
        // if (!condition && !this.hasView) {
        //     this.viewContainer.createEmbeddedView(this.templateRef);
        //     this.hasView = true;
        //   } else if (condition && this.hasView) {
        //     this.viewContainer.clear();
        //     this.hasView = false;
        //   }
    }
}