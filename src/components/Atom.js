import React from 'react';

class Atom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shells: null
        };
    }

    renderShell = (electrons, level) => {
        let _electrons = [];        

        for( let i = 1; i <= electrons; i++ ){
            let rotation = (360/electrons) * i,
                translate = 10 + (level * 20);

            let styles = {
                transform: 'rotate(' + rotation + 'deg) translate(' + translate + 'px)'
            };

            _electrons.push(<span className="electron" style={styles} key={level + '-' + i}></span>);
        }

        let animation = {
            width: 20 + (level * 40) + 'px',
            height: 20 + (level * 40) + 'px',
            animationDuration: (++level)*4 + 's',
            animationName: (level % 2) ? 'spin' : 'spin-cc'
        }

        return (
            <div className="shell" style={animation} key={level}>
                {
                    _electrons
                }       
            </div>
        )
    }

    render() {  
        let shells = this.props.shells;
        return (
            <>
                {
                    shells.map((electrons, level)=>{
                        return this.renderShell(electrons, level);
                    })
                }
            </>
        )
    }
}

export default Atom;