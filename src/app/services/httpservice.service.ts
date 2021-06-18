import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class HttpserviceService
{
    baseurl= "https://www.poemist.com/api/v1/randompoems"
    constructor(private http:HttpClient)
    {
        this.http.get(this.baseurl).forEach(x=> {console.log(x)
            
        })
        }
    getdata()
    {
        return this.http.get(this.baseurl);
    }
}