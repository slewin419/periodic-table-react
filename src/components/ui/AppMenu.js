import React from 'react';
import Item from './Item';

let appMenuStyle = {
    position: 'fixed',
    bottom: '0px',    
    width: '100%',
    height: '60px',
    zIndex: '999'    
};

class AppMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            activeElementGroups: []
        }
    }

    toggleMenu(e) {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    handleItemClick(e) {
        let group = e.currentTarget.innerText; 
        this.props.setActiveElementGroups(group);
        this.toggleMenu();
    }

    render() {
        let {title} = this.props;
        let items = this.props.children.filter((child) => { return child.type.name === "Item" });        
        let isMenuOpen = (this.state.isMenuOpen) ? 'shown' : 'hidden';
        return ( 
            <div id="app-menu" style={appMenuStyle}>
                <div className="container">
                    <div className="menu-header">
                        <div className="toggle-icon" onClick={e => this.toggleMenu(e)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={'menu-body ' + isMenuOpen}>
                        <h2 className="title">{title}</h2>
                        <ul className="menu-list" style={{textTransform: 'capitalize'}}>
                            {
                                items.map((item, i) => { 
                                    return <Item key={i} onClick={this.handleItemClick.bind(this)}>{item.props.children}</Item>
                                })
                            }
                        </ul>
                    </div>                    
                </div>                
            </div>
        );
    }
}

export default AppMenu;