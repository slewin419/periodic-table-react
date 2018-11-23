import React from 'react';

export default class Item extends React.Component {

    
    render(){
        let text = this.props.children;
        return (
            <li onClick={this.props.onClick}>{text}</li>
        )
    }
}
