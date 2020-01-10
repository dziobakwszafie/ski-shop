import React, { Component } from 'react';
//import './styles.css';
import {
    Button,
} from 'reactstrap';

// class Stuff extends Component {
const Stuff = ({data, sortBy}) => 

//class Stuff extends Component {
 //   render() {

    //const {data, sortBy} = props;

         (
            <div>
                <Button onClick={() => sortBy('length')}>Kaszanka</Button>
                <div className="row">
                    {
                        data.map ( row => (
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
        
//}
// zainstaluj prettier i beutify
 export default Stuff; //https://www.youtube.com/watch?v=akxsFgM7DPA

