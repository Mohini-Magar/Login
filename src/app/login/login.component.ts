import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 invalidLogin : boolean
  constructor(private router: Router, private auth :AuthService) { }

  ngOnInit(): void {
  }
 login(lForm : NgForm){
   const credentials ={
     'username' : lForm.value.username,
     'password' : lForm.value.password
   }
   this.auth.authService(credentials)
   .subscribe(response =>{
    const token = (<any>response).token;
    localStorage.setItem("jwt", token);
    this.invalidLogin = false;
    this.router.navigate(['/home']);
  }, err => {
    this.invalidLogin = true;

   })
 }
}
