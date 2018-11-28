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

    getCategoryClassName(){
        return {
            'alkaline earth metal': 'aem',
            'alkali metal': 'am',
            'metalloid': 'md',
            'noble gas': 'gas',
            'diatomic nonmetal': 'dn',
            'transition metal': 'tm',
            'post-transition metal': 'pm'
        }[this.getCategory()] || '';
    }

    renderElement(element) {        
        let isActive = this.props.active.findIndex((group) => {
            return group.toLowerCase() === this.getCategory();   
        }) !== -1 ? 'active' : '';

        return (
            <div className={ `element ${isActive} ${this.getCategoryClassName()}` }                  
                 onClick={this.props.handleClick.bind(this, element)}                  
                 title={element.name}>
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