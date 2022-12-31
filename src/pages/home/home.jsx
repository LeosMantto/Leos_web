import { Outlet } from 'react-router-dom';
//import styles css
import './home.style.css';
//import components secondarys
import HeaderCustom from '../../components/header-custom/header-custom-component';
import NavBarCustom from '../../components/navbar-custom/navbar-custom-component';

//page home
const Home = () => {
    return (
        <>
        <div class="side-menu">
        { /* custom component navigation menu */ }
            <NavBarCustom />
        </div>
        <div class="container">
            <div class="header">
            { /* custom component header*/ }
                <HeaderCustom />
            </div>
            <div class="content">
                { /*pagina de dashboard custom*/ }
                <Outlet />
            </div>
        </div>
       
        </>
    );
};


export default Home;