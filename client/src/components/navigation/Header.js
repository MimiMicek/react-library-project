import React, {useState} from 'react';
import './Header.css';
import NavLinks from './NavLinks';
import HamburgerMenu from './HamburgerMenu';
import Backdrop from './Backdrop';

const Header = props => {
    
        const [ isMenuOpen, setMenuOpen ] = useState(false);

        const openMenu = () => {
            setMenuOpen(true);
        };

        const closeMenu = () => {
            setMenuOpen(false);
        };

        return(
            <React.Fragment>
                { isMenuOpen && <Backdrop onClick={ closeMenu }/> }
                { isMenuOpen && <HamburgerMenu>
                    <nav>
                        <NavLinks/>
                    </nav>
                </HamburgerMenu> }         
            <header className="header">
                
                 <button className="nav-menu-btn" onClick={ openMenu }>
                    <span />
                    <span />
                    <span />
                </button>
                <nav className="nav-header">
                    <NavLinks/>
                </nav>
            </header>
            </React.Fragment>
        );
}

export default Header;