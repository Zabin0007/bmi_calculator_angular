import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn:boolean=false


  constructor(private route:Router){
      this.checkLoginStatus()
  }

  checkLoginStatus(){
    const userDetails = localStorage.getItem('email')
    if(userDetails){
    const user = JSON.parse(userDetails)
    if(user.password&&user.email){
      this.isLoggedIn=true;
      }
    }
    console.log("isLoggedIn:", this.isLoggedIn);
  }

  signout(){
    localStorage.clear()
    this.isLoggedIn=false
    this.route.navigateByUrl('')
  }
}
