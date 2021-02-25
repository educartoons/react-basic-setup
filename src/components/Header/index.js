import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as NikeLogotype } from '../../images/nike.svg'

function Header() {
  return <header>
    <div className="container">
      <div className="flex items-center justify-between px-6">
        <div>
          <Link to="/">
            <NikeLogotype />
          </Link>
        </div>
        <div>
          <nav className="">
            <ul className="flex list-none gap-5">
              <li><Link to="/products">Nuevos Lanzamientos</Link></li>
              <li><a href="#">Hombre</a></li>
              <li><a href="#">Mujer</a></li>
              <li><a href="#">Niño/a</a></li>
              <li><a href="#">Rebajas</a></li>
              <li><a href="#">SNKRS</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
}

export default Header;