import React from 'react';
import { Button } from 'react-bootstrap';

export default class MasterJob extends React.Component{

    constructor(){
    super();
    this.state = {
      jobName : "",
      buildReference : "",
      homelink : "api_testing"
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeLink = this.onChangeLink.bind(this);
  }

  onChange = (e) =>{
    console.log(e,"ee")
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) =>{
    console.log(e,"e")
     e.preventDefault();
    const { jobName,buildReference } = this.state;
    console.log(jobName,buildReference)
  }

  //  onChangeLink(){
  //    this.props.changeLink(this.state.homelink);
  //  }


render(){

const { jobName,buildReference } = this.state;


    var data = this.props.result;
    var data2 = this.props.data;
    console.log(data,data2,"adta")
    const style = {
        fromAlign : {
          marginTop : 10
        }

     }


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
      if(this.state.jobName != "" && this.state.buildReference !=  ""){
           _.each(masterjobsArray,(element) =>{
             if(element.jobName === this.state.jobName && element.buildReference === this.state.buildReference){
               _.each(element.subBuilds,(eachsubjob) =>{
                 subjobNames.push({"label":eachsubjob.jobName});
                 allCount.push({"value":eachsubjob.allCount});
                 failedCount.push({"value":eachsubjob.failedCount});
                 notRunCount.push({"value":eachsubjob.notRunCount});
                 passedCount.push({"value":eachsubjob.passedCount});
               })
              return;
             }
             else {
               subjobNames = null;
               allCount = null;
               failedCount = null;
               notRunCount = null;
               passedCount = null;
             }
           })
        console.log("inside if",this.state)

      }
      else{
        console.log("inside else")
        subjobNames = null;
        allCount = null;
        failedCount = null;
        notRunCount = null;
        passedCount = null;
      }

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
                "caption": "Each Masterjob Details",
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
          <form onSubmit = {this.onSubmit} style={ style.fromAlign}>
            <div className = "row">
                   <div className = "col-md-5">
                     jobName : <input type ="text" name="jobName" value={jobName} onChange={this.onChange} />
                   </div>
                   <div className = "col-md-5">
                     buildReference : <input type="text" name="buildReference" value={buildReference} onChange = {this.onChange} />
                   </div>
                   <div className = "col-md-2">
                       <Button type="submit" bsStyle="primary" >Submit</Button>


                   </div>
             </div>
        </form>

       <div id="chart-container-master">FusionCharts will render here</div>

   </div>

    )
  }
}
                    /*<Button type="submit" bsStyle="primary" onClick={this.onChangeLink}>Submit</Button>*/
