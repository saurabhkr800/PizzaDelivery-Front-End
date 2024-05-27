import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials = {

    email : '',
    password : '',
    userName : ''
  }
  user!: User;

  constructor(private signupService:SignupService) { 
    
  }

  ngOnInit(): void {
  }

  
  onSubmit(){

    if((this.credentials.userName != '' && this.credentials.email != '' && this.credentials.password != '')&&(this.credentials.userName != null && this.credentials.email != null && this.credentials.password != null))
    {
      this.signupService.register(this.credentials).subscribe(data=>{
        console.log(data);
        window.location.href = ""
      },error=>{
        console.log(error);
      })
      
    }
    //   this.signupService.adduser(this.credentials).subscribe(
    //     (response : any) =>{
    //      console.log("fdsg"+response.token);
    //      this.signupService.loginUser(response.token);
       
    //       localStorage.setItem("email",this.credentials.email);
    //       window.location.href = "";
    //     },
    //     error =>{
    //       console.log(error);})

      
    //  }
    //  else{
 
    //    console.log("cred is empty");
 
    //  }

   
  }
}
