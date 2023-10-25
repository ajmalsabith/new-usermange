import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router,private http:HttpClient){}

  loginform!:FormGroup
  message=''
  ngOnInit(): void {
    this.loginform= new FormGroup({
    
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',Validators.required),
    })
  }


  submit(){
    let user= this.loginform.getRawValue()

    this.http.post('http://localhost:4000/login',user).subscribe((res:any)=>{
      this.message= res.message
      this.router.navigate(['home'])
    },(err)=>{
      this.message=err.error.message
    })
  }

}
