import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-box.component.html',
  styleUrl: './main-box.component.css'
})
export class MainBoxComponent {
  // Using Output to export the data entered in form 
  @Output() calculate = new EventEmitter<{initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number}>();
  
  //Data stores in these variables from the form
  enteredInitialInvestment = '0';  //enteredInitialInvestment = signal('0'); 
  enteredExpectedReturn = '0';     //enteredExpectedReturn = signal('0'); 
  enteredAnnualInvestment = '0';   //enteredAnnualInvestment = signal('0'); 
  enteredDuration = '0';           //enteredDuration = signal('0'); 
  //This function transfers the data outside the component
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,    // initialInvestment: +this.enteredInitialInvestment()
      duration: +this.enteredDuration,                      // duration: +this.enteredDuration()
      expectedReturn: +this.enteredExpectedReturn,          // expectedReturn: +this.enteredExpectedReturn()
      annualInvestment: +this.enteredAnnualInvestment,      // annualInvestment: +this.enteredAnnualInvestment()

    });

  }

  

}

