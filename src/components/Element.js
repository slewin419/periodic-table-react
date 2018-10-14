import React from 'react';
import ElementAPI from './ElementAPI';

class Element extends React.Component {
    constructor(props) {
        super(props);

        this.element = ElementAPI.getElementByPosition(props.xpos, props.ypos);           
    }

    renderElement(element){
        return(
            <div className="element">                
                {/* <span className="position">{`${element.xpos}, ${element.ypos}`}</span> */}
                <span className="number">{element.number}</span>
                <span className="symbol">{element.symbol}</span>
                <span className="name">{element.name}</span>
            </div>
        )
    }

    renderSpace(){
        return(
            <span></span>
        )
    }

    render() {
        let element;
        if(this.element) {            
            element = this.renderElement(this.element);
        } else (
            element = this.renderSpace()
        )

        return element;
    }
}

export default Element;