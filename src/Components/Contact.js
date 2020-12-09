import React, { Component } from 'react';
import CGV from '../Assets/misc/CGV.pdf';
import ML from  '../Assets/misc/mentionslegales.pdf';

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
                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/dj2versailles"><i class="fab fa-facebook"></i> Facebook</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/dj2v.fr/"><i class="fab fa-instagram"></i> Instagram</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://fr.linkedin.com/company/dj2v"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/ysmb3j65p4vo9foofw8zfs2q4?si=_CTU4jyTTPWg1OaYyPIsug"><i class="fab fa-spotify"></i> Spotify</a></li>
                            </ul>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="mailto:contact@dj2v.fr?subject=dj2versailles.fr : Prise de contact"><i class="fas fa-envelope"></i> contact@dj2v.fr</a></li>
                                <li><a target="_blank" rel="noreferrer" href="tel:+33622314412"><i class="fas fa-mobile"></i> 06.22.31.44.12</a></li>
                                <li><a target="_blank" rel="noreferrer" href="tel:+33602349486"><i class="fas fa-mobile"></i> 06.02.34.94.86</a></li>
                            </ul> 
                        </div>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href={CGV}><i class="fas fa-file-signature"></i> CGV</a></li>
                            <li><a target="_blank" rel="noreferrer" href={ML}><i class="fas fa-award"></i> Mentions légal</a></li>
                        </ul>
                        
                    </div>
                    <div className="informations">
                        <h2>Informations</h2>
                        <p>SARL DJ2V au capital de 1000€, 11 rue Victor Bart 78000 Versailles</p>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.516446176774!2d2.1430656057209925!3d48.81020688887737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67c520276df47%3A0x7a22ba03022834e4!2s11%20Rue%20Victor%20Bart%2C%2078000%20Versailles!5e0!3m2!1sfr!2sfr!4v1607534359511!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                <p style={{textAlign: "center"}}>©opyright By Lucas Warlop</p>
            </section>
        )
    }
}
