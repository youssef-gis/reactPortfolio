import './navbar.css'
import logo from "../../assets/logo.jpg" 
import nav_Menu from "./data"
import {IoIosColorPalette} from 'react-icons/io'
import { useModalContext } from '../../context/Modal_context'

const Navbar = () => {
  const {openModal} = useModalContext()
  return (
    <nav>
      <div  className='container nav_container' >
        <a href="index.html" className='nav__logo' >
          <img src={logo} alt="profile_logo"  />
        </a>
        <ul className='nav__menu' >
          {
            nav_Menu.map(item=>{
              return(
                <li key={item.id} ><a href={item.link}>{item.title}</a></li>
              )
            })
          }
        </ul>
        <button id='theme__icon' onClick={openModal} ><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar