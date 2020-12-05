import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="container contact">
                <span></span>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li><i class="fab fa-facebook"></i> Facebook</li>
                        <li><i class="fab fa-instagram"></i> Instagram</li>
                        <li><i class="fab fa-linkedin"></i> LinkedIn</li>
                        <li><i class="fab fa-spotify"></i> Spotify</li>
                        <li><i class="fas fa-envelope"></i> Mail</li>
                        <li><i class="fas fa-mobile"></i> Téléphone</li>
                        
                    </ul>
                </div>
            </section>
        )
    }
}
