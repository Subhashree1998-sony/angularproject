import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentEntity } from 'src/entity/student.entity';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username!: string;
  password!: string;
  email!: string;
  rollno!: number;
  course!: string;

  stdEntity: StudentEntity = new StudentEntity();

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  registerStudent() {
    //this.router.navigate(["subharoute2"]);
  //    this.http.post("https://localhost:44378/student/SaveRecord",this.stdEntity).subscribe(
  //    posts=>{},
  //    error=>{}
  //  )
  //  }
      this.router.navigate(["subharoute3"]);

}
  }

