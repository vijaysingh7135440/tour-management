import React from 'react'
import { Container, Row, Button} from 'reactstrap'
import logo from '../../assets/image/travel tales.jpg'
import { NavLink, Link } from 'react-router-dom'
import './header.css'

 const nav__links=[
  {
    path:'/home',
    display:'Home'
},
  {
    path:'/About',
    display:'About'
},
  {
    path:'/tours',
    display:'Tours'
},
 ]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper ">
      {/*------------------logo------*/}
          <div className="logo">
            <img src= {logo} alt="" />
          </div>
      {/*------------------logo end------*/}

      {/*------------------menu start------*/}
      <div className="navigation">
        <ul className="menu   gap-5">
          {nav__links.map((item, index) => (
            <li className="nav__item" key={index}>
              <NavLink to={item.path} className={navClass=> navClass. isActive ? "active__link" : ""}>{item.display}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/*------------------menu end------*/}
      <div className="nav__right  gap-4 ">
      <div className="nav__btns   gap-4 ">
        <Button className="btn secondary__btn"><Link to='/login'>Login</Link> </Button>
        <Button className="btn primary__btn"><Link to='/register'>Register</Link> </Button>
      </div>
      <span className="mobile__menu">
      <i className="ri-menu-line"></i>
      </span>
      </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
