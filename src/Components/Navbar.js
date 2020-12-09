import React, { Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
        <nav className="menu-sticky">
            <ul>
                <li><a  href="#presentation"><i class="fas fa-home"></i>&nbsp;Accueil</a></li>
                <li><a  href="#decouvrir"><i class="fas fa-binoculars"></i>&nbsp;Découvrir</a></li>
                <li><a  href="#prestation"><i class="fas fa-handshake"></i>&nbsp;Prestations</a></li>
                <li><a  href="#location"><i class="fas fa-shopping-cart"></i>&nbsp;Locations</a></li>
                <li><a href="#galerie"><i class="fas fa-images"></i>&nbsp;Galerie</a></li>
            </ul>
        </nav>
        )
    }
}
