import './index.css'
import { NavLink} from "react-router-dom"
import { Bars2Icon } from '@heroicons/react/24/outline'
import logo from '../../assets/react.svg'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <img src={logo} alt="logo" className='icons' />
                <NavLink to='/' className={({isActive})=>isActive ? 'active' : ''}>
                    <li>Inicio</li>
                </NavLink>
            </ul>
             <ul className='menuicon'>
                <li><Bars2Icon className='icons' ></Bars2Icon></li>
            </ul> 
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