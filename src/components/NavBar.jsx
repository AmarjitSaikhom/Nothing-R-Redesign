import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleNavMenu = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true);
        }
    }

    return (
        <div className='nav_Bar'>
            <NavLink className={'nav_logo'} to={'/'}>
                <h3>NOTHING (R)</h3>
            </NavLink>

            <div className="nav_menu">
                <NavLink className="menu_link" to={'/productDetail'}>Store</NavLink>
                <NavLink className={'menu_link'} to={'/productDetail'}>Phones</NavLink>
                <NavLink className={'menu_link'} to={'/productDetail'}>Audio</NavLink>
                <NavLink className={'menu_link'} to={'/productDetail'}>Watches</NavLink>
                <NavLink className={'menu_link'} to={'/productDetail'}>Accessories</NavLink>
                <NavLink className={'menu_link'} to={'/about'}>About</NavLink>
                <NavLink className={'menu_link'} to={'/login'}>Account</NavLink>
            </div>


            <div className="cart">
                <i className="ri-shopping-bag-line"></i>
            </div>

            <div onClick={handleNavMenu} className="side_menu">
                {showMenu ? <i className="ri-close-line"></i> : <i className="ri-equal-line"></i>}
            </div>

            <div className={`nav_side_list ${showMenu ? '' : 'hide_nav_list'}`}>
                <NavLink className={'nav_list'} to={'/product'}>Store</NavLink>
                <div className="line"></div>
                <NavLink className={'nav_list'}>Phones</NavLink>
                <div className="line"></div>
                <NavLink className={'nav_list'}>Audio</NavLink>
                <div className="line"></div>
                <NavLink className={'nav_list'}>Watches</NavLink>
                <div className="line"></div>
                <NavLink className={'nav_list'}>Accessories</NavLink>
                <div className="line"></div>
                <NavLink className={'nav_list'} to={'/about'}>About</NavLink>
                <div className="line"></div>
                <NavLink className={'nav_list'} to={'/login'}>Account</NavLink>
            </div>
        </div>
    )
}

export default NavBar
