import React from 'react';

export default class Item extends React.Component {

    
    render(){
        let text = this.props.children;
        return (
            <li>{text}</li>
        )
    }
}
