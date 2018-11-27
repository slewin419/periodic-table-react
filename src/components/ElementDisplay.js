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
                        <h4><a href={element.source} title="Wikipedia">{element.name}</a></h4>                        
                        <div className="summary">
                            <i>({element.phase + ', ' + element.category})</i>
                            <p>Discovered by: {element.discovered_by}</p>
                            <p>{element.summary}</p>
                        </div>
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