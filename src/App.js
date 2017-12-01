import React, { Component } from 'react';
import './App.css';
import BasicTable from './components/Table.js'
import cashflowData from './data/cashflowData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashFlow: cashflowData,
      user_birthday: '1960-08-31',
      spouse_birthday: '1960-11-28'
    } 
  }
  
  limitDecimals(num) {
    return num.toFixed(2)
  }

  afterTax(income) {
    let total;
    if(income <= 9325) {
      total = income * .9;
    } else if (income <= 37950) {
        total = income * .85;
    } else if (income <= 91900) {
        total = income * .75;
    } else if (income <= 191650) {
        total = income * .72;
    } else if (income <= 416700) {
        total = income * .66;
    } else if (income <= 418400) {
        total = income * .65;
    } else if (income > 418400) {
        total = income * .604;
    }
    return this.limitDecimals(total);
  }
  
  render() {
    return (
      <div className="App">
        <BasicTable userData={this.state.cashFlow} userBirthday={this.state.user_birthday} spouseBirthday={this.state.spouse_birthday} limitDecimals={this.limitDecimals} afterTax={this.afterTax}/>
      </div>
    );
  }
}

export default App;