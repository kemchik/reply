import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;

class StopPoint extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return  (<a className="item">{this.props.params.name}</a>)
    }
}

module.exports = StopPoint;