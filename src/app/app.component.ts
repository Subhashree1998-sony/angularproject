import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentEntity } from 'src/entity/student.entity';
import { RegistrationComponent } from './registration/registration.component';
import {Subha1Service} from './subha1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'subha-proj';
 num1: number= 7;
  constructor(private http: HttpClient, private subha1service:Subha1Service){
    let subha=this.subha1service.getuserdata().subscribe(data=>{
      console.log(data);
    });
   
  }

 studentObj: Array<StudentEntity> = [{
    rollno: 102,
    name: "swagatika",
    isphychal: true,
    Emailid:""
  }, {
   rollno: 204,
   name: "suchi",
   isphychal: false,
   Emailid:""
  }];

  showName: boolean = true;
  menuItems: Array<string> =["Login","Registration","list page","gallery"];
  boolv : boolean= true;
  receivingmenuItem(eventmenuname : string){
    console.log("this is from parent component", eventmenuname);

  }
  resetButton(){
    this.boolv = !this.boolv;
    if(this.boolv){
      this.menuItems =["Login","Registration","list page","gallery"];

    }
    else{
      this.menuItems =[];
    }
  }
  
ngOnInit(){
  
      this.http.get("https://localhost:44378/student/GetRandom").subscribe
      ((data: any)=>{
        this.studentObj= data;
        console.log("getcall");
      } )
      console.log(" after getcall");
      
}
 showMyName(): void{
  if(this.showName==true)
   this.showName = false;
  else
    this.showName=true;
  }
}




