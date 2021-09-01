import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Subha1Service {

  constructor( private http: HttpClient) {

   }
   getuserdata(){
     let apiurl="https://localhost:44378/student/SaveRecord";
     return this.http.get(apiurl);
   }
}
