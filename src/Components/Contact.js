import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section id="footer" className="container footer">
                <span></span>
                <div className="footer-flex">
                    <div className="contact">
                        <h2>Contact</h2>
                        <div className="flex"> 
                           <ul>
                               
                                <li><a href="https://www.facebook.com/dj2versailles"><i class="fab fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com/dj2v.fr/"><i class="fab fa-instagram"></i> Instagram</a></li>
                                <li><i class="fab fa-linkedin"></i> LinkedIn</li>
                            </ul>
                            <ul>
                                <li><i class="fab fa-spotify"></i> Spotify</li>
                                <li><i class="fas fa-envelope"></i> Mail</li>
                                <li><i class="fas fa-mobile"></i> Téléphone</li>
                            </ul> 
                        </div>
                        
                    </div>
                    <div className="informations">
                        <h2>Informations</h2>
                        <p>©opyright SARL DJ2V au capital de 1000€, 11 rue Victor Bart 78000 Versailles, contact@dj2v.fr</p>
                    </div>
                </div>
                <p style={{textAlign: "center"}}>By Lucas Warlop</p>
            </section>
        )
    }
}
