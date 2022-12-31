import React, { useState } from 'react';
//import icons react-icons
import { AiFillDashboard } from 'react-icons/ai';
import { RiCarWashingFill } from 'react-icons/ri';
import { FaUserTie, FaUserAlt} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
//import css styled
import './navbar.style.css';

const NavBarComponent = () => {
    const navegacion = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: <AiFillDashboard  />
        },
        {
            name: 'Usuarios',
            path: '/',
            icon: <FaUserAlt  />
        },
        {
            name: 'Supervisores',
            path: '/',
            icon: <FaUserTie  />
        },
        {
            name: 'Lavado de pipas',
            path: '/lavado_pipas',
            icon: <RiCarWashingFill/>
        }
    ]
    const [activeLink, setActiveLink] = useState(null);
    const clickActive = () => setActiveLink(true);


    return ( 
        <>
            <div class="brand-name">
                <h1>LEOS</h1>
            </div>
            <ul className='list-nav'>
            {
                navegacion.map((item, index) => {
                    return (
                        <li key={index} onClick={() => setActiveLink(index)} >
                            <NavLink to={item.path} className={activeLink === index ? ".active-link" : ""}>
                                {item.icon}&nbsp;
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    );
                })
            }
            </ul>
        </> 
  );
};
 
export default NavBarComponent;