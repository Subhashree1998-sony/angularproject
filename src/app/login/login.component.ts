import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  username!:string;
  password!:string; 
 
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit()  {
  }
    logInUser()
    {
      // this.http.get("https://localhost:44378/student/GetRandom").subscribe
      // (posts=>{
      //   console.log(posts);
      // } )
  
      if(this.username=="Admin"&& this.password=="admin123")
      {
        console.log("welcome");
        console.log("username");
      }

      this.router.navigate(["subharoute1"]);
   
  }
    

}

