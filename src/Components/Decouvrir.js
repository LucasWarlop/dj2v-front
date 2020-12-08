import React, { Component } from 'react';

import house from '../Assets/images/illustrations/Spotify/house.jpg';
import disco from '../Assets/images/illustrations/Spotify/disco.jpg';
import discohouse from '../Assets/images/illustrations/Spotify/disco-house.jpg';
import electrochill from '../Assets/images/illustrations/Spotify/electro-chill.jpg';
import annee80 from '../Assets/images/illustrations/Spotify/annee80.jpg';
import techhouse from '../Assets/images/illustrations/Spotify/tech-house.jpg';
import tech from '../Assets/images/illustrations/Spotify/tech.jpg';

export default class Decouvrir extends Component {
    render() {
        return (
                <section id="decouvrir" className="spotify container">
                    <span></span>
                    <h2>Découvrez nos playlist</h2>
                    <article>
                        <div>
                            <a target="_blank" href="https://open.spotify.com/playlist/3egLY79Diiw4lgwUs5Ja8j?si=2xpWhc98RXyF7MsyR-UMcw"><img src={house} /></a>
                        </div>
                        <div> 
                            <a target="_blank" href="https://open.spotify.com/playlist/7DRG9nGCe82UytGJq3sFeX?si=mMgHZiHCRyy-kklT4Zxhdg"><img src={disco} /></a>
                        </div>
                        <div>
                            
                            <a target="_blank" href="https://open.spotify.com/playlist/5i4xajVWbEJnIkAWpMXRmz?si=nBgqLz78RXKoMhB5He2ncg"><img src={discohouse} /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://open.spotify.com/playlist/07AbcDxETD7RFE6E41fADq?si=RlYBwcWIQY-79vusbgZ2UA"><img src={tech} /></a> 
                        </div>
                        <div>
                            <a target="_blank" href="https://open.spotify.com/playlist/3blA7Jw45FmFqgyagMTTdi?si=t9FQEa6ARIOWcH3EFhPkuA"><img src={techhouse} /></a> 
                        </div>
                        <div>
                            <a target="_blank" href="https://open.spotify.com/playlist/4q2YFnStqlBbmBOa8fDisG?si=SiGzmZ6XQyiXQIfgUfs-rA"><img src={electrochill} /></a>
                            
                        </div>
                        <div>
                            <a target="_blank" href="https://open.spotify.com/playlist/6YeiIgUY3C586bDWruEQKA?si=g4HBVOWGR3uuznsMkFT3mw"><img src={annee80} /></a>
                        </div>
                    </article> 
                </section>
        )
    }
}
