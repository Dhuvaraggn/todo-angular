import { Directive ,Input} from "@angular/core";

@Directive({
    selector:'[customdirective]'
})
export class customdirective
{
    constructor()
    {

    }
    @Input() 
    set customdirective(f:any)
    {
        console.log(f)
        // f.forEach((x)=>{
        //     console.log(x);
        // });

    }

}