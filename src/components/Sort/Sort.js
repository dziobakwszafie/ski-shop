import React, { Component } from 'react';
import './styles.css';
import data from './skis-table.json'
import Stuff from './Stuff/Stuff';

class Sort extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: data
        }
        this.sortBy = this.sortBy.bind(this)
    }
    sortBy(key) {
        this.setState ({
            data: data.sort( (a, b) => a[key] < b[key])
        })
    }
    render () {
        return (
            <Stuff data={this.state.data} sortBy={this.sortBy}/>
        );
    }
}

export default Sort;

