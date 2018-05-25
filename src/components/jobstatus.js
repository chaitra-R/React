import React from 'react';



export default class JobStatus extends React.Component{

 render(){
   var some = true;
   var response = this.props.result;
   console.log(response,"response123")
  var result = response.searchResult;
  var Completed = 0;
  var Aborted = 0;
  var Inprogress = 0;

  _.each(result,function(element){
       if(element.jobStatus === "COMPLETED")
       {
         Completed = Completed + 1;
       }
       if(element.jobStatus === "ABORTED")
       {
         Aborted = Aborted + 1;
       }
       if(element.jobStatus === "INPROGRESS"){
         Inprogress = Inprogress + 1;
       }

  })
FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut3d',
        renderAt: 'chart-container-jobstatus',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "jobs Status",
                // "subCaption": "Last year",
                // "numberPrefix": "$",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
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
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5",
            },
            "data": [
                {
                    "label": "In Progress",
                    "value": Inprogress
                },
                {
                    "label": "Completed",
                    "value": Completed
                },
                {
                    "label": "Aborted",
                    "value": Aborted
                }

            ]
        }
    }).render();
});

return(

<div>
  <div id="chart-container-jobstatus">FusionCharts will render here</div>
</div>

)
}
}
