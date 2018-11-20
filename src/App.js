import React, { Component } from 'react';
import PeriodicTableChart from './components/PeriodicTableChart';
import AppMenu from './components/ui/AppMenu';
import Item from './components/ui/Item';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div id="App">
        <h1 className="page-title">Periodic Table</h1>
        <AppMenu title={'Element Groups'}>            
            <Item>Alkaline Earth Metal</Item>
            <Item>Metalloids</Item>
            <Item>Noble Gases</Item>            
        </AppMenu>        
        <PeriodicTableChart />
      </div>
    );
  }
}

export default App;
