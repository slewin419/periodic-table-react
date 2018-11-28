import React from 'react';

export default class Item extends React.Component {

    getCategoryClassName(){
        return {
            'alkaline earth metal': 'aem',
            'alkali metal': 'am',
            'metalloid': 'md',
            'noble gas': 'gas',
            'diatomic nonmetal': 'dn',
            'transition metal': 'tm',
            'post-transition metal': 'pm'
        }[this.props.children.toLowerCase()] || '';
    }
    
    render(){
        let text = this.props.children;
        return (
            <li className={this.getCategoryClassName()} onClick={this.props.onClick}>{text}</li>
        )
    }
}
