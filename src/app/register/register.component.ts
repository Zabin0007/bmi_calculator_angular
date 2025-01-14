import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

username:string=""
email:string=""
password:string=""

constructor(private route:Router){}

  register(){
    console.log(this.username,this.email,this.password);
    if(this.username && this.email && this.password){
      const userDetails = {
        username:this.username,
        email:this.email,
        password:this.password
      }
      localStorage.setItem('email',JSON.stringify(userDetails))
      Swal.fire({
        title: "Success",
        text: "Registration Succesful!",
        icon: "success"
      });
      this.route.navigateByUrl('login')
    }else{
      Swal.fire({
              title: "warn",
              text: "Please Fill the details!",
              icon: "warning"
            });
    }

  }

}
