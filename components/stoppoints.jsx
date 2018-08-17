import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import StopPoint from './stoppoint.jsx'

class StopPoints extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            stopPoints: '',
            direction: '',
            chose: false
        };

        this.choiceBus = this.choiceBus.bind(this);
    }

     choiceBus(){
        const busNumberFromInp = $('#busNumber').val();
        const api = `https://api.tfl.gov.uk/line/${busNumberFromInp}/route/sequence/outbound`;
        let stopPoints = '';
        let direction = '';

         $.ajax({
             type: 'GET',
             url: api,
             success: dataLoaded,
             async:false
         });

         function dataLoaded(data) {
             stopPoints = data.stopPointSequences[0].stopPoint;
             direction = data.orderedLineRoutes[0].name
         }

         this.setState({
             stopPoints: stopPoints.map((item) => {
                 return <StopPoint params = {item}/>
             }),
             direction: direction,
             chose: true
         });
    }

    componentDidMount() {
        $('#forSendBusNumber').bind('click', this.choiceBus)
    };

    render(){

           return (
               <div className="ui secondary vertical pointing menu">
                   <h1>{this.state.direction}</h1>
                   {this.state.stopPoints}
                </div>
        )
    }
}

module.exports = StopPoints;