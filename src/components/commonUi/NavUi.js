import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faAddressBook, faLock } from "@fortawesome/free-solid-svg-icons";
import '../../assets/css/Nav.css'

const NavUi = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/main"
        className="menu"
      >
        <FontAwesomeIcon icon={faHouse} />
        <span>홈</span>
      </NavLink>
      <NavLink
        to="/book"
        className="menu"
      >
        <FontAwesomeIcon icon={faBook} />
        <span>도서</span>
      </NavLink>
      <NavLink
        to="/contact"
        className="menu"
      >
        <FontAwesomeIcon icon={faAddressBook} />
        <span>연락처</span>
      </NavLink>
      <NavLink
        to="/my"
        className="menu"
      >
      <FontAwesomeIcon icon={faLock} />
        <span>My계정</span>
      </NavLink>
    </nav>
  )
}

export default NavUi;