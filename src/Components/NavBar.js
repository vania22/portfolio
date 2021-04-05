import React, { useEffect, useRef } from 'react';
import avatar from '../img/avatar.png';
import { NavLink } from 'react-router-dom';

function Navbar({ menuVisible, setNavToggle }) {
    const ref = useRef(null);

    useEffect(() => {
        const closeOnOutterClick = (e) => {
            if (!ref.current.contains(e.target) && menuVisible) {
                setNavToggle(false);
            }
        };

        document.addEventListener('click', closeOnOutterClick);

        return () => document.removeEventListener('click', closeOnOutterClick);
    }, [menuVisible]);

    return (
        <div className='NavBar' ref={ref}>
            <nav className='nav'>
                <span className='close-button' onClick={() => setNavToggle(false)}>
                    <span className='close-button-line'></span>
                    <span className='close-button-line'></span>
                </span>
                <div className='profile'>
                    <img src={avatar} alt='' />
                </div>

                <ul className='nav-items' onClick={() => setNavToggle(false)}>
                    <li className='nav-item'>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' exact activeClassName='active'>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/projects' exact activeClassName='active'>
                            Projects
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' exact activeClassName='active'>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className='footer'>
                    <p>@2021 Ivan Krupskyi</p>
                </footer>
            </nav>
        </div>
    );
}

export default Navbar;
