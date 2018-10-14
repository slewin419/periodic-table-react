import React from 'react';
import Element from './Element';

class PeriodicTableChart extends React.Component {

    constructor(props) {
        super(props);

        this.ROWS = 10;
        this.COLUMNS = 18;

        this.FULL_ROW = { start: 0, end: 0 };

        // this.blankRowMap = {
        //     1: { start: 2, end: 17 },
        //     2: { start: 3, end: 12 },
        //     3: { start: 3, end: 12 },
        //     4: this.FULL_ROW,
        //     5: this.FULL_ROW,
        //     6: this.FULL_ROW,
        //     7: this.FULL_ROW,
        //     8: { start: 0, end: 3 },
        //     9: { start: 0, end: 3 }
        // };
    }

    element(x, y) {
        return (
            <Element xpos={x} ypos={y} />
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
