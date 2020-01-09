import React, { Component } from 'react';
//import './styles.css';
import {
    Button,
} from 'reactstrap';

// class Stuff extends Component {
export default function tabelka(props){
    return (
        <div>
            <Button onClick={() => props.sortBy('length')}>Kaszanka</Button>
            <div className="row">
                {
                    props.data.map ( row => (
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="row m-2 wow animated zoomIn" data-wow-delay=".1s">  
                                <img src="{ require('img/vertical/skis1.jpg') }" />
                                {/* <a href={this.props.myPhoto} data-lightbox="roadtrip"><img src="{ require ({this.props.myMiniPhoto})}" className="rounded img-fluid skis-image" /></a> */}
                                <div className="p-2">
                                    <p><b>Model: </b>{row.model}</p>            
                                    <p><b>Długość: </b>{row.length}cm</p>    
                                </div>
                            </div>  
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

// export default Stuff; https://www.youtube.com/watch?v=akxsFgM7DPA

