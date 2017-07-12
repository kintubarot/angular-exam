import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  loginMsg = '';
  usersList = ['user1', 'user2'];

  users = [
    {
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      conf_password: String,
      birthDate: Date,
      flat_purchaseDate: Date,
      profilePic: String,
      agreeTearms: Boolean,
      flatBlock: String,
      flatNumber: String,
      mob: String,
    }
  ]

  constructor() {
    
   }

  ngOnInit() {
  }

  onLogin(event: any){
   
   this.userName = 'User logged in'

  }
  onSignup(){
    this.usersList.push(this.userName);
    console.log(this.userName + " has been added");
  }

}
