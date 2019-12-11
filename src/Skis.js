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
        const ski = ['Voelkl', '175', '16.9' ];
        const counting = ski.map( ski => {
            return (
                <p className="btn btn-outline-info">{ski}</p>  
            )
    });

        return (
            <div>{counting}</div>
        );
    }
}
export default Skis;



//moze by tak tytuł param\etru opisac na sztywno, 
//potem zrobic tablice w tablicy i z pierwszej tablicy przpisac obiekty do danego parametru 
// a w drugien zrobić funkcję map zeby się tworzyło wiecej elementów 