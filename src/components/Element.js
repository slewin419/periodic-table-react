import React from 'react';
import ElementAPI from './ElementAPI';

class Element extends React.Component {
    constructor(props) {
        super(props);

        this.element = ElementAPI.getElementByPosition(props.xpos, props.ypos);   
        //console.log(this.element);           
    }

    renderElement(element){
        return(
            <div className="element">
                <span className="symbol">{element.symbol}</span>
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