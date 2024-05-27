import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {

    email : '',
    password : '',
    userName : ''
  }
  isregistered : boolean | undefined;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.isregistered = false;
  }

  onSubmit(){

    if((this.credentials.email != '' && this.credentials.password != '') && (this.credentials.email != null && this.credentials.password != null)){ 
      this.loginService.generateToken(this.credentials).subscribe(
        (response : any) =>{
         this.loginService.loginUser(response.token);
         window.location.href = "/pizza"
        
        },
        error =>{
          this.isregistered = true;
          console.log(error);
        }
      )
    
  
     }
     else{
 
       console.log("cred is empty");
 
     }
   
   }
  
}
