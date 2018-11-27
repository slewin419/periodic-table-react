import React, { Component } from 'react';
import PeriodicTableChart from './components/PeriodicTableChart';
import AppMenu from './components/ui/AppMenu';
import Item from './components/ui/Item';
import ElementDisplay from './components/ElementDisplay';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        activeElementGroups: [],
        currentElement: ''
    };
  }

  setActiveElementGroups(group){
    let groups = [];
    let selected = this.state.activeElementGroups.findIndex((_group) => group === _group);
    
    this.setState((state,props) => {            
      if(selected === -1){
        groups = state.activeElementGroups.concat(group);
      }else {                
        groups = state.activeElementGroups.filter((_group) => group !== _group);
      }

      return {
        activeElementGroups: groups
      }      
    });
  }

  setCurrentElement(element) {
    this.setState({currentElement: element});
  }

  render() {
    return (
      <div id="App">
        <h1 className="page-title">Periodic Table</h1>     
        <div style={{paddingTop: '65px', height: '100%'}}>
          <div className="element-display-container">
            <ElementDisplay element={this.state.currentElement} />
          </div>
          <div className="periodic-table-container">
            <PeriodicTableChart activeElementGroups={this.state.activeElementGroups} handleElementClick={this.setCurrentElement.bind(this)}/>
          </div>          
        </div>
        <AppMenu title={'Element Groups'} 
                 setActiveElementGroups={this.setActiveElementGroups.bind(this)}>            
            <Item>alkaline earth metal</Item>
            <Item>alkali metal</Item>
            <Item>metalloid</Item>
            <Item>noble gas</Item> 
            <Item>diatomic nonmetal</Item>
            <Item>transition metal</Item>
            <Item>post-transition metal</Item>
        </AppMenu>  
      </div>
    );
  }
}

export default App;
