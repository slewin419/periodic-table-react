import React from 'react';
import Atom from './Atom';

class ElementDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentElement: null
        };
    }

    render() {
        let element = this.props.element;        
        if (element) {
            return (
                <div id="element-display">
                    <div className="atom">
                        <Atom shells={element.shells} />
                    </div>
                    <div className="atom-info">
                        <h4><a href={element.source}>{element.name}</a> ({element.phase + ', ' + element.category})</h4>
                        <h5><i>Discovered by: {element.discovered_by}</i></h5>
                        <p>
                            {element.summary}
                        </p>
                    </div>
                </div>
            )
        }
        return <div id="element-display" className="text-center">
                    <h2>Click an element to show its information here.</h2>
                </div>
    }


}

export default ElementDisplay;