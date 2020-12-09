import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default class Galerie extends Component {
    state = {slideImages: [
        'images/slides/slide_1.jpg',
        'images/slides/slide_2.jpg',
        'images/slides/slide_3.jpg',
        'images/slides/slide_4.jpg',
        'images/slides/slide_5.jpg',
        'images/slides/slide_6.jpg',
        'images/slides/slide_7.jpg',
        'images/slides/slide_8.jpg',
        'images/slides/slide_9.jpg',
        'images/slides/slide_10.jpg',
        'images/slides/slide_11.jpg',
        'images/slides/slide_12.jpg',
        'images/slides/slide_13.jpg',
        'images/slides/slide_14.jpg',
        'images/slides/slide_15.jpg',
        'images/slides/slide_16.jpg',
        'images/slides/slide_17.jpg',
        'images/slides/slide_18.jpg',
        'images/slides/slide_19.jpg',
        'images/slides/slide_20.jpg',
        'images/slides/slide_21.jpg',
        'images/slides/slide_22.jpg',
        'images/slides/slide_23.jpg',
        'images/slides/slide_24.jpg',
        'images/slides/slide_25.jpg',
      ]} ;
    render() {
        return (
            <section id="galerie" className="galerie container">
                <span></span>
                <h2>Galerie</h2>
                <div>
        <Slide easing="ease" >
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[0]} />
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[1]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[2]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[3]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[4]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[5]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[6]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[7]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[8]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[9]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[10]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[11]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[12]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[13]}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img alt="illustration" src={this.state.slideImages[14]}/>
            </div>
          </div>
        </Slide>
      </div>
            </section>
        )
    }
}
