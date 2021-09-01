import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  username!:string;
  password!:string; 
  router: any;
  constructor(
    
  ) { }

  ngOnInit(): void {
  }
  logInUser()
    {
      // this.http.get("https://localhost:44378/student/GetRandom").subscribe
      // (posts=>{
      //   console.log(posts);
      // } )
      

    }

}