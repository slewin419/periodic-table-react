import React from 'react';
import ElementAPI from './ElementAPI';

class Element extends React.Component {
    constructor(props) {
        super(props);

        this.element = ElementAPI.getElementByPosition(props.xpos, props.ypos);

        this.state = {
            active: ''
        }
    }

    getCategory(){
        return this.element.category || '';
    }

    renderElement(element) {
        console.table(element);
        let isActive = (this.getCategory() === this.props.active.toLowerCase()) ? 'active' : '';                
        return (
            <div className={ `element ${isActive}` } onClick={this.props.handleClick.bind(this, element)} title={element.name}>
                {/* <span className="position">{`${element.xpos}, ${element.ypos}`}</span> */}
                <span className="number">{element.number}</span>
                <span className="symbol">{element.symbol}</span>
                {/* <span className="name">{element.name}</span> */}
            </div>
        )
    }

    render() {
        return (this.element) ? this.renderElement(this.element) : <div className="block blank"></div>;
    }
}

export default Element;