import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private http:HttpClient,private router:Router){}

  userdata!:any
  message=''
  ngOnInit(): void {
    this.http.get('http://localhost:4000/home').subscribe((res)=>{
      this.userdata=res
    },(err)=>{
      this.message=err.error.message
    })
  }


}
