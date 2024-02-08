import React, { Component } from "react";
import logo from '../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (

            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <div>
                                <img src={logo} className="avatar_mask" alt="React logo"></img>
                            </div>     
                            <b> Curso</b> React                       

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                </ul>

                                <ul className="navbar-nav navbar-right mr-auto">
                                    <li className="nav-item">
                                        <a href="" active-className="active" className="nav-link" >inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" active-className="active" className="nav-link" >Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" active-className="active" className="nav-link" >Formulario</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" active-className="active" className="nav-link" >Pagina 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" active-className="active" className="nav-link" >Pagina 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" active-className="active" className="nav-link" >Peliculas </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item">Panel de usuarios</a></li>
                                            <li><a className="dropdown-item" href="#">Mi perfil</a></li>
                                            <li><a className="dropdown-item">Ajustes</a></li>
                                            <li>
                                               
                                            </li>
                                            <li><a className="dropdown-item pointer">Cerrar sesión</a></li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>


        );
    }
}

export default Header;