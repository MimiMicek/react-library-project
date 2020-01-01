import React from 'react';
import './Header.css';
import ReactDOM from 'react-dom';

const HamburgerMenu  = props => {
        const content = <aside className="hamburger-menu">{props.children}</aside>;

        return ReactDOM.createPortal(content, document.getElementById('hamburger-hook'));  
}

export default HamburgerMenu;