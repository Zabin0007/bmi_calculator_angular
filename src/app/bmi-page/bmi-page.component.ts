import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bmi-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi-page.component.html',
  styleUrl: './bmi-page.component.css'
})
export class BMIPageComponent {

  Height:string=""
  weight:string=''
  result:number | null = null
  status:string | null = null
  BMI(){
    console.log(this.Height,this.weight);
    if(this.Height&&this.weight){
      let heightInMeters = parseFloat(this.Height)/100
      this.result= parseFloat(this.weight)/(heightInMeters*heightInMeters)
        if (this.result < 18.5){ 
        this.status = "Underweight"; 
      } 
      else if (this.result >= 18.5 && this.result <= 24.9){ 
        this.status = "Normal Weight"; 
      } else if (this.result >= 25 && this.result <= 29.9){ 
        this.status = "Overweight"; 
      } else if (this.result >= 30 && this.result <= 35){ 
        this.status = "Obese"; 
      } else { 
        this.status = "Morbid Obesity"; 
      }
    
    }else{
      Swal.fire({
      title: "Warning",
       text: "Please fill in the details!",
       icon: "warning"
      });
    }
  }

}
