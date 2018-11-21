import React from 'react';
import Item from './Item';

let appMenuStyle = {
    position: 'fixed',
    top: '0px',
    background: '#000000cc',
    width: '300px',
    height: '100%',
    zIndex: '999',
    color: 'white'
};

class AppMenu extends React.Component {

    selectGroup(e){
        debugger;
    }

    render() {
        let {title} = this.props;
        let items = this.props.children.filter((child) => {return child.type.name === "Item"});        
        return ( 
            <div id="app-menu" style={appMenuStyle} onClick={e => this.selectGroup(e)}>
                <div className="container">
                    <div class="menu-header">
			<div className="toggle-icon">
			    <div></div>
			    <div></div>
			    <div></div>
			</div>
                    </div>
                    <h2 className="title">{title}</h2>
                    <ul className="menu-list">
                        {
                            items.map((item, i) => { return <Item key={i}>{item.props.children}</Item>})
                        }
                    </ul>
                </div>                
            </div>
        );
    }
}

export default AppMenu;