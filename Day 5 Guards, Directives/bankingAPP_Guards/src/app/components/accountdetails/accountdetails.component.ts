import { Component } from '@angular/core';

@Component({
  selector: 'app-accountdetails',
  imports: [],
  templateUrl: './accountdetails.component.html',
  styleUrl: './accountdetails.component.css'
})
export class AccountdetailsComponent {


  accountDetails ={
    accNo:101, accName:'Sumit',accType:'Savings',accBalance:9000,accIsActive:true
  }
}
