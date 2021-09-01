import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }
  logInUser()
    {
      // this.http.get("https://localhost:44378/student/GetRandom").subscribe
      // (posts=>{
      //   console.log(posts);
    
      // } )
      this.router.navigate(["subharoute3"]);

}
}
