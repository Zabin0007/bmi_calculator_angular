import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private route:Router){}

  login() {
    console.log(this.email, this.password);

    if (this.email && this.password) {
      const userDetailsString = localStorage.getItem('email');
      if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);
        if (userDetails.email === this.email && userDetails.password === this.password) {
          Swal.fire({
            title: "Success",
            text: "Login Successful!",
            icon: "success"
          });
          setTimeout(() => { 
            this.route.navigateByUrl('dashboard')
          }, 1000);

        } else {
          Swal.fire({
            title: "Error",
            text: "Incorrect email or password!",
            icon: "error"
          });
        }
      } else {
        Swal.fire({
          title: "Error",
          text: "No user registered with these details!",
          icon: "error"
        });
      }
    } else {
      Swal.fire({
        title: "Warning",
        text: "Please fill in the details!",
        icon: "warning"
      });
    }
  }
}
