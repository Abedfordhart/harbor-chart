import React, { Component } from 'react';
import './App.css';
import BasicTable from './Table.js'
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
  
  componentDidMount() {
    console.log('data from state, ', this.state.cashFlow)
  }
  
  render() {
    return (
      <div className="App">
        <BasicTable userData={this.state.cashFlow} userBirthday={this.state.user_birthday} spouseBirthday={this.state.spouse_birthday}/>
      </div>
    );
  }
}

export default App;
        


        /*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/
