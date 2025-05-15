import React, {Component} from 'react';

class Header extends Component{
    render() {
        return(
            <header className="Header">
                <h1 className="Header-name">{this.props.appName}</h1>
            </header>
        )
    }
}

export default Header;