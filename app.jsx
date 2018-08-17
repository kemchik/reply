'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import StopPoints from './components/stoppoints.jsx'

ReactDOM.render(
    <StopPoints/>,
    document.getElementById('stopPoints')
);

