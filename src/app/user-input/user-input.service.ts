import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  constructor() { }

  // onCalculateInvestmentResults(data: {
  //   initialInvestment: number;
  //   duration: number;
  //   expectedReturn: number;
  //   annualInvestment: number;
  // }) {
  //   const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;

  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }

  //   console.log(annualData);
  // }


}
