import React from 'react';
import Element from './Element';
import ElementDisplay from './ElementDisplay';

class PeriodicTableChart extends React.Component {

    constructor(props) {
        super(props);

        this.ROWS = 10;
        this.COLUMNS = 18;

        this.displayInfo = this.displayInfo.bind(this);

        this.state = {
            currentElement: null
        };
    }

    displayInfo(element) {
        //console.table(element);
        this.setState({
            currentElement: element
        });
    }

    element(x, y) {
        return (
            <Element xpos={x} ypos={y} handleClick={this.displayInfo} />
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
                <ElementDisplay element={this.state.currentElement} />
                {this.createTable()}
            </div>
        );
    }
}

export default PeriodicTableChart;
