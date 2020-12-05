import React, { Component} from 'react';
import logo from '../Assets/images/logos/black.png';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
        <nav className="menu-sticky">
            <ul>
                <li><a  href="#presentation"><i class="fas fa-home"></i>&nbsp;Accueil</a></li>
                <li><a  href="#prestation"><i class="fas fa-handshake"></i>&nbsp;Prestations</a></li>
                <li><a  href="#location"><i class="fas fa-shopping-cart"></i>&nbsp;Locations</a></li>
                <li><a href="#galerie"><i class="fas fa-images"></i>&nbsp;Galerie</a></li>
            </ul>
        </nav>
        )
    }
}
