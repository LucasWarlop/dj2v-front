import React, { Component } from 'react';

import Presentation from '../Components/Presentation';
import Prestation from '../Components/Prestation';
import Contact from '../Components/Contact';
import Location from '../Components/Location';
import Decouvrir from '../Components/Decouvrir';

export default class Accueil extends Component {
    render() {
        return (
            <main>
                <Presentation />
                <Decouvrir />
                <Prestation />
                <Location />
                <Contact />
            </main>
        )
    }
}
