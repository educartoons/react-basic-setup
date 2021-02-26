import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, signOut } from '../../auth'

import { ReactComponent as NikeLogotype } from '../../images/nike.svg'

function Header() {
  const history = useHistory();
  return <header>
    <div className="container">
      <div className="bg-gray-100 flex justify-end">
        <nav className="pr-6">
          <ul className="flex h-8 items-center  list-none gap-5">
            {isAuthenticated() && <li className="text-xs"><Link to="/admin">Admin</Link></li>}
            <li className="text-xs"><Link to="/signin">Ayuda</Link></li>
            <li className="text-xs"><Link to="/signin">Unete</Link></li>
            {
              isAuthenticated() ? <li onClick={function () {
                signOut(() => {
                  history.push('/');
                })
              }} className="text-xs cursor-pointer">Cerrar sesión</li> : <li className="text-xs"><Link to="/signin">Iniciar sesion</Link></li>
            }
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between px-6">
        <div>
          <Link to="/">
            <NikeLogotype />
          </Link>
        </div>
        <div>
          <nav className="">
            <ul className="flex list-none gap-5">
              <li><Link to="/products/new">Nuevos Lanzamientos</Link></li>
              <li><Link to="/products/men">Hombre</Link></li>
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