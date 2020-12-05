import React, { Component } from 'react';

import djcover from '../Assets/images/illustrations/JPG/event9.jpg';
import photocover from '../Assets/images/illustrations/JPG/photo.jpg';
import eventcover from '../Assets/images/illustrations/JPG/coverevent.jpg';

export default class Prestation extends Component {
    render() {
        return (
            <section id="prestation" className="container">
                <span></span>
                <h2>Nos prestations</h2>
                <article className="prestation">
                <div className="card">
                        <div className="card-img">
                            <img  src={djcover}/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">DJ</h3>
                            <p className="card-text">Faites de votre évènement un 
                            moment unique grâce à l’un de nos DJ.</p>
                            <a className="btn" href="mailto:contact@dj2v.fr">Demander un Devis</a>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card-img">
                            <img  src={photocover}/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Photographe</h3>
                            <p className="card-text">La branche photographe 
                                afin de pouvoir capturer au mieux vos évènements. </p>
                            <a className="btn" href="mailto:contact@dj2v.fr">Demander un Devis</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img  src={eventcover}/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Evénement</h3>
                            <p className="card-text">DJ2V propose l’accompagnement et l’aide à 
                            l’organisation de vos évènement. </p>
                            <a className="btn" href="mailto:contact@dj2v.fr">Demander un Devis</a>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}
