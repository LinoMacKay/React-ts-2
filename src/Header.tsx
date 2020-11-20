import React from "react"
import { Link, NavLink } from "react-router-dom"

function Header(){
  const activeStyle = {
    color: "purple",
  };

    return <div>
<header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/shoes">
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    </div>
}

export default Header