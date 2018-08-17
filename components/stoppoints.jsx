import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;

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

         $.ajax({
             type: 'GET',
             url: api,
             success: dataLoaded,
             async:false
         });

         function dataLoaded(data) {
             stopPoints = data;
         }

         this.setState({
             stopPoints: stopPoints.stopPointSequences[0].stopPoint,
             direction: stopPoints.orderedLineRoutes[0].name,
             chose: true
         });
    }

    componentDidMount() {
        $('#forSendBusNumber').bind('click', this.choiceBus);
    };

    render(){
           return (
               <div className="ui secondary vertical pointing menu" id="listofproducts">
                   {this.state.direction}
                </div>
        )
    }
}

module.exports = StopPoints;