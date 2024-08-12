import { Component, Input } from '@angular/core';
import { MainBoxComponent } from "../main-box/main-box.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MainBoxComponent, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  //object array imported from other component
@Input() results?: {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}[];   
  

}
