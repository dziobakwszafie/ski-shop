import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class Skis extends Component {
    render() {
        return (
            <div class="container" id="main-skis">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div class="row m-2 wow animated zoomIn" data-wow-delay=".1s">   
                            <a href="./img/vertical/skis1.jpg" data-lightbox="roadtrip"><img src="./img/mini/skis1.jpg" class="rounded img-fluid skis-image" /></a>
                            <div class="p-2">
                                <Items myNazwa={allThings[0].nazwa}  myDługosc={allThings[0].długosc}/>
                                <Items myNazwa={allThings[1].nazwa}  myDługosc={allThings[1].długosc}/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

const allThings = [
    {
        nazwa: 'Rosol',
        długosc: '180cm',
    },
    {
        nazwa: 'Atom',
        długosc: '184cm',
    }
];

class Items extends Component {
    render() {
        return (
            <div>
                <p class="btn btn-outline-info">{this.props.myNazwa}</p>            
                <p>{this.props.myDługosc}</p>    
            </div>         
            // <p><b>Promień:</b> R17,9</p>              
            // <p><b>Stan ślizgu:</b> bardzo dobry</p>           
            // <p><b>Stan krawędzi:</b> znośny</p>     
            // <p class="btn btn-outline-primary"><b>Cena:</b> 650 zł</p>
        );
    }
}

export default Skis;




