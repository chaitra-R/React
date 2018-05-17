import React from 'react';

export default class Jobcount extends React.Component{


  render(){
    var data = this.props.result;
    var searchResult = data.searchResult;
    var normalJob = 0;
    var masterJob = 0;
    _.each(searchResult,function(element){
      if(element.subBuilds){
          masterJob = masterJob + 1
      }
      else {
        normalJob = normalJob + 1;

      }

    })

    FusionCharts.ready(function () {
      var revenueChart = new FusionCharts({
          type: 'doughnut2d',
          renderAt: 'chart-container',
          width: '450',
          height: '450',
          dataFormat: 'json',
          dataSource: {
              "chart": {
                  "caption": "Selenium jobs",
                  // "subCaption": "Last year",
                  // "numberPrefix": "$",
                  // "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                  "bgColor": "#ffffff",
                  "showBorder": "0",
                  "use3DLighting": "0",
                  "showShadow": "0",
                  "enableSmartLabels": "0",
                  "startingAngle": "310",
                  "showLabels": "0",
                  "showPercentValues": "1",
                  "showLegend": "1",
                  "legendShadow": "0",
                  "legendBorderAlpha": "0",
                  "defaultCenterLabel": "Functional testing",
                  "centerLabel": "Revenue from $label: $value",
                  "centerLabelBold": "5",
                  "showTooltip": "0",
                  "decimals": "0",
                  "captionFontSize": "14",
                  "subcaptionFontSize": "14",
                  "subcaptionFontBold": "0"
              },
              "data": [
                  {
                      "label": "Normal job",
                      "value": normalJob
                  },
                  {
                      "label": "Master job",
                      "value": masterJob
                  }

              ]
          }
      }).render();
  });
    return(

    <div>
      <div id="chart-container">FusionCharts will render here</div>
    </div>

    )
  }
}
