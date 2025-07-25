import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const hideOnRoutes = ["/login", "/register"];
    const isAccountPage = hideOnRoutes.includes(location.pathname);

    const handleNavMenu = () => setShowMenu((prev) => !prev);


    const navLinks = [
        { label: "Store", to: "/product" },
        { label: "Phones", to: "/product/phone" },
        { label: "Audio", to: "/product/audio" },
        { label: "Watches", to: "/product/watches" },
        { label: "Accessories", to: "/product/accessories" },
        { label: "About", to: "/about" },
        { label: "Account", to: "/login" },
    ];


    return (
        <div className='nav_Bar'>
            <NavLink className={'nav_logo'} to={'/'}>
                <h3>NOTHING (R)</h3>
            </NavLink>

            {!isAccountPage && (
                <>
                    <div className="nav_menu">
                        {navLinks.map((link) => (
                            <NavLink key={link.to} className="menu_link" to={link.to}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>


                    <div className="cart">
                        <i className="ri-shopping-bag-line"></i>
                    </div>

                    <button onClick={handleNavMenu} className="side_menu" aria-label="Toggle Menu">
                        {showMenu ? <i className="ri-close-line"></i> : <i className="ri-equal-line"></i>}
                    </button>

                    <div className={`nav_side_list ${showMenu ? '' : 'hide_nav_list'}`} onClick={() => setShowMenu(false)}>
                        {navLinks.map((link, index) => (
                            <div key={link.to} style={{ animationDelay: `${index * 0.1}s` }}>
                                <NavLink className="nav_list" to={link.to}>
                                    {link.label}
                                </NavLink>
                                <div className="line"></div>
                            </div>
                        ))}
                    </div>
                </>
            )}


        </div>
    )
}

export default NavBar
