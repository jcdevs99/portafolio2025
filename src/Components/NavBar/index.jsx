import './index.css'
import { NavLink} from "react-router-dom"
import logo from '../../assets/react.svg'
import menu from '../../assets/Menu.svg'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <img src={logo} alt="logo" />
                <NavLink to='/' className={({isActive})=>isActive ? 'active' : ''}>
                    <li>Inicio</li>
                </NavLink>
            </ul>
            {/* <ul className='menuicon'>
                <li><img src={menu} alt="menuicon" /></li>
            </ul> */}
            <ul className='navbarSecondary'>
                <NavLink to='/proyectos' className={({isActive})=>isActive ? 'active' : ''}>
                    <li>Proyectos</li>
                </NavLink>
                <NavLink to='/contactar' className={({isActive})=>isActive ? 'active' : ''}>
                    <li>Contactar</li>
                </NavLink>
                <NavLink to='/planes' className={({isActive})=>isActive ? 'active' : ''}>
                    <li>Precios</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar