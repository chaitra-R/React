import React from 'react';
import { Button } from 'react-bootstrap';

export default class MasterJob extends React.Component{


  render(){
  
    var data = this.props.result;
    const style = {
        fromAlign : {
          marginTop : 10
        }
     }

    console.log(data);
    var response = data.searchResult;
    var masterjobsArray = [];
    var subjobNames = [];
    var allCount = [];
    var failedCount = [];
    var notRunCount = [];
    var passedCount = [];
    _.each(response,(element) => {
      if(element.subBuilds){
        masterjobsArray.push(element);
          _.each(element.subBuilds,(eachsubjob) =>{
            subjobNames.push({"label":eachsubjob.jobName});
            allCount.push({"value":eachsubjob.allCount});
            failedCount.push({"value":eachsubjob.failedCount});
            notRunCount.push({"value":eachsubjob.notRunCount});
            passedCount.push({"value":eachsubjob.passedCount});
          })
      }
      else{}
    })
console.log(subjobNames,"subjobNames")
console.log(masterjobsArray,"masterjobArray")
FusionCharts.ready(function(){
    var salesChart = new FusionCharts({
        type: 'scrollstackedcolumn2d',
        dataFormat: 'json',
        renderAt: 'chart-container-master',
        width: '550',
        height: '350',
        dataSource: {
            "chart": {
                "caption": "Masterjob Details",
                // "subCaption": "(2016 to 2017)",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "xaxisname": "subjob names",
                "yaxisname": "jobrun count status",
                "showvalues": "0",
                // "numberprefix": "$",
                "legendBgAlpha": "0",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "showborder": "0",
                "bgcolor": "#ffffff",
                "showalternatehgridcolor": "0",
                "showplotborder": "0",
                "showcanvasborder": "0",
                "legendshadow": "0",
                "plotgradientcolor": "",
                "showCanvasBorder": "0",
                "showAxisLines": "0",
                "showAlternateHGridColor": "0",
                "divlineAlpha": "100",
                "divlineThickness": "1",
                "divLineIsDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "lineThickness": "3",
                "flatScrollBars": "1",
                "scrollheight": "10",
                "numVisiblePlot": "12",
                "showHoverEffect":"1"
            },
            "categories": [
                {
                    "category": subjobNames
                }
            ],
            "dataset": [
                {
                    "seriesname": "allCount",
                    "data": allCount
                },
                {
                    "seriesname": "failedCount",
                    "data": failedCount
                },
                {
                    "seriesname": "notRunCount",
                    "data": notRunCount
                },{
                    "seriesname": "passedCount",
                    "data": passedCount
                }
            ]
        }
    }).render();
});
    return(

    <div>


       <div id="chart-container-master">FusionCharts will render here</div>

   </div>

    )
  }
}
