import React from 'react';
import { grey300 } from 'material-ui/styles/colors';

export default class GroupedBarChart extends React.Component{
	render() {
		var some = true;
   var response = this.props.result;
   console.log(response,"response123")
	 var result = response.searchResult;
	 var category =[];
	 var allCount = [];
	 var noPass = [];
	 var noFail = [];
	 var notRunCount = [];
	 _.each(result,function(element){

		  category.push({"label":element.jobName + " - " +  element.buildReference});
		  allCount.push({"value":element.allCount});
		  noPass.push({"value":element.passedCount});
			noFail.push({"value":element.failedCount});
			notRunCount.push({"value":element.notRunCount});
	 })

  console.log(category)
		FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
    type: 'MSColumn2D',
    renderAt: 'chart-container-grouped',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "All Job Reports",
            // "subcaption": "In Billion $",
            "yaxismaxvalue": "25",
            "decimals": "0",
            // "numberprefix": "$",
            // "numbersuffix": "B",
            "placevaluesinside": "1",
            "rotatevalues": "0",
            "divlinealpha": "50",
            "plotfillalpha": "80",
            "drawCrossLine": "1",
            "crossLineColor": grey300,
            "crossLineAlpha": "100",
            "theme": "zune"
        },
        "categories": [{
            "category": category,
					}],
        "dataset": [{
                "seriesname": "allCount",
                "data": allCount
            },
            {
                "seriesname": "Number of pass",
                "data": noPass
            },
            {
                "seriesname": "Number of fail",
                "data": noFail
            },
						{
                "seriesname": "Not Run Count",
                "data": notRunCount
            }
        ]
    }
})
    .render();
});
  return(
		<div>
     	
		<div id="chart-container-grouped">FusionCharts will render here</div>
		</div>
	)
}
}
