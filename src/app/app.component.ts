import { Component, EventEmitter, Output } from '@angular/core';
import { MainBoxComponent } from './main-box/main-box.component';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [MainBoxComponent, TableComponent],
})
export class AppComponent {
  // {}[] together is used to tell that it is a object array
  resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];
  // for signal

  //resultsData = signal<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,                    
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[] | undefined>(undefined);

  // data paramiter is used to the format of the data which is imported
  calculateInvestmentResults(data:{initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number}) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {

      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    //have to assign the data object array to a variable so that it can be exported
    this.resultsData = annualData;

    // for signal use

    // this.resultsData.set(annualData);

  }
}
