import React from 'react';

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
                    <h2>{title}</h2>
                    <ul className="menu-list">
                        {
                            items.map((item, i) => { return <li key={i}>{item.props.children}</li>})
                        }
                    </ul>
                </div>                
            </div>
        );
    }
}

export default AppMenu;