import React from 'react';
import Element from './Element';

class PeriodicTableChart extends React.Component {

    constructor(props) {
        super(props);

        this.ROWS = 10;
        this.COLUMNS = 18;

        this.state = {
            currentElement: null            
        };
    }   

    element(x, y) {
        let {activeElementGroups} = this.props;
        return (
            <Element xpos={x} ypos={y} handleClick={this.props.handleElementClick} active={activeElementGroups}/>
        );
    }

    createTable() {
        let table = [];
        for (var y = 1; y <= this.ROWS; y++) {
            let columns = [];
            for (var x = 1; x <= this.COLUMNS; x++) {
                columns.push(<div className={"block " + x + "-" + y} key={x + y} >{this.element(x, y)}</div >);
            }
            table.push(<div id={y} key={y}>{columns}</div>);
        }

        return table;
    }

    render() {              
        return (
            <div id="periodic-table">                
                {this.createTable()}
            </div>
        );
    }
}

export default PeriodicTableChart;
