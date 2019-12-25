import React, { Component } from 'react';

class Skis extends Component {
    render() {
        return (
            <div class="container" id="main-skis">
                <div class="row">
                    <Items myPhoto={allThings[0].photo} myMiniPhoto={allThings[0].miniPhoto} myModel={allThings[0].model} myLength={allThings[0].lenght} myRadius={allThings[0].radius} myCondition={allThings[0].condition} myPrice={allThings[0].price}/>
                    <Items myPhoto={allThings[1].photo} myMiniPhoto={allThings[1].miniPhoto} myModel={allThings[1].model} myLength={allThings[1].lenght} myRadius={allThings[1].radius} myCondition={allThings[1].condition} myPrice={allThings[1].price}/>
                    <Items myPhoto={allThings[2].photo} myMiniPhoto={allThings[2].miniPhoto} myModel={allThings[2].model} myLength={allThings[2].lenght} myRadius={allThings[2].radius} myCondition={allThings[2].condition} myPrice={allThings[2].price}/>
                </div>
            </div>
        );
    }
}


const allThings = [
    {
        photo: './img/vertical/skis1.jpg',
        miniPhoto: './img/mini/skis1.jpg',
        model: 'Atom',
        lenght: '180cm',
        radius: 'R14',
        condition: 'bardzo dobry',
        price: '700 zł'
    },
    {
        photo: './img/vertical/skis1.jpg',
        miniPhoto: './img/mini/skis1.jpg',
        model: 'Atom',
        lenght: '180cm',
        radius: 'R14',
        condition: 'bardzo dobry',
        price: '700 zł'
    },
    {
        photo: './img/vertical/skis1.jpg',
        miniPhoto: './img/mini/skis1.jpg',
        model: 'Atom',
        lenght: '180cm',
        radius: 'R14',
        condition: 'bardzo dobry',
        price: '700 zł'
    }
];

class Items extends Component {
    render() {
        return (
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div class="row m-2 wow animated zoomIn" data-wow-delay=".1s">  
                    <img src="{ require('img/vertical/skis1.jpg') }" />
                    {/* <a href={this.props.myPhoto} data-lightbox="roadtrip"><img src="{ require ({this.props.myMiniPhoto})}" className="rounded img-fluid skis-image" /></a> */}
                    <div class="p-2">
                        <p><b>Model: </b>{this.props.myModel}</p>            
                        <p><b>Długość: </b>{this.props.myLength}</p>    
                        <p><b>Promień: </b>{this.props.myRadius}</p>              
                        <p><b>Stan ślizgu: </b>{this.props.myCondition}</p>            
                        <p class="btn btn-outline-primary"><b>Cena: </b>{this.props.myPrice}</p>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Skis;




