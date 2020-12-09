import React, { Component } from 'react';


export default class Presentation extends Component {
    render() {
        return (
            <section id="presentation" className="container">
                <article className="introduction">
                    
                    <div>
                        <h2>Bienvenue chez DJ2V</h2>
                        <p>Entreprise d’événementiel spécialisé dans la sonorisation et le Djing.
                        Au fil des années DJ2V reste la meilleure option pour vos évènements d’entreprises ou particuliers. 
                        Fort de notre expérience nous vous garantissons une expérience musicale réussie que ce soit pour la 
                        sonorisation et l’animation de vos évènements ou pour la location de matériels ou encore pour l’organisation 
                        de conférences ou d’évènements clés en main que ce soit des mariages, soirées privées ou évènements étudiant. 
                        DJ2V sait s’adapter en toutes circonstances pour faire de votre évènement quelque chose d’inoubliable.</p>
                    </div>
                    <div>
                        <h2 className="right">DJ2V qu'est ce que c'est ?</h2>
                        <p>Né de l’amitié de deux collégiens il y a 9 ans DJ2Versailles est aujourd’hui une entreprise d’évènementiel spécialisée dans 
                            la sonorisation et l’organisation de tous type de manifestations. 
                            Nos services comprennent: 
                            Sonorisation et animation de tous types de Soirées (rallyes, anniversaires, mariages, soirée d’entreprise, 
                            soirées étudiantes) 
                            Location de matériels de sonorisation, d’éclairage (de soirée ou d’extérieur) 
                            Organisation d’évènements clés en main (mariage, soirée privée, séminaire d’entreprise, conférences, 
                            soirées étudiantes, WEI etc… 
                            DJ2V cherche aujourd’hui à s’agrandir afin de viser de nouveaux objectifs tout en gardant son 
                            professionnalisme et sa « secret sauce » qui fait aujourd’hui son succès.</p>
                    </div>
                </article>
            </section>
        )
    }
}
