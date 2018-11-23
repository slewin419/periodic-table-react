import React, { Component } from 'react';
import PeriodicTableChart from './components/PeriodicTableChart';
import AppMenu from './components/ui/AppMenu';
import Item from './components/ui/Item';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        activeElementGroup: ''
    };
  }

  setActiveElementGroup(group){    
    this.setState({activeElementGroup: group});
  }

  render() {
    return (
      <div id="App">
        <h1 className="page-title">Periodic Table</h1>
        <AppMenu title={'Element Groups'} 
                 activeElementGroup={this.setActiveElementGroup.bind(this)}>            
            <Item>alkaline earth metal</Item>
            <Item>alkali metal</Item>
            <Item>metalloid</Item>
            <Item>noble gas</Item> 
            <Item>diatomic nonmetal</Item>
            <Item>transition metal</Item>
            <Item>post-transition metal</Item>
        </AppMenu>        
        <PeriodicTableChart activeElementGroup={this.state.activeElementGroup}/>
      </div>
    );
  }
}

export default App;
