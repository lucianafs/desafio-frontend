import React from 'react';
import { Link } from 'react-router-dom'
 const Menu = ()=>{
    return(
        <div className="navbar shadow-sm">
            <div className="container-fluid d-flex justify-content-between align-items-center py-2">
                <h5 className="brand-logo font-24 font-weight-bold mb-0">tembici | desafio front-end</h5>
                <nav className="nav right mb-0">
                    <Link to="/" className="nav-link pl-4">Home</Link>
                    <Link to="/carrinho" className="nav-link pl-4">Carrinho</Link>
                </nav>
            </div>
        </div>
    )
}

export default Menu;