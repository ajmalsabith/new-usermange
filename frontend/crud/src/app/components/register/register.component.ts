import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router ,} from '@angular/router';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient){}

  
  registerform!:FormGroup
  message=''
  
  
  ngOnInit(): void {
    console.log('haoo');
    
    this.registerform= new FormGroup({
      name:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',Validators.required),
      password2:new FormControl('',Validators.required)
    })
    console.log(this.registerform);
    
  }

  submit(){

    console.log('working');
    
    let user= this.registerform.getRawValue()
    this.http.post('http://localhost:4000/register',user).subscribe((res:any)=>{
       this.message= res.message
      this.router.navigate(['login'])
    },(err)=>{
       this.message=err.message
      
    })
  }
}
