import React from 'react';
import {blue300,black,white} from 'material-ui/styles/colors';
import BarChart from 'react-bar-chart';
// const data = [
//   {text: 'Man123', value: 500},
//   {text: 'Woman', value: 300}
// ];

const margin = {top: 20, right: 20, bottom: 30, left: 40};
const background = {backgroundColor : blue300}

export default class Dashboard extends React.Component{
  getInitialState() {
    return { width: 10 };
  }


  // handleBarClick(element, id){
  //   console.log(`The bin ${element.text} with id ${id} was clicked`);
  // }
  render(){
    var data = [];

    var finial  = this.props.result;
    var temp = finial.searchResult;
    if(temp){
      _.each(temp,function(element,index){
        var obj = {};
        console.log(element,"elemnt")
        obj.text = element.jobName;
        if(element.jobStatus == 'COMPLETED'){
            obj.value = 100;
            obj.color = "red"
          }
          else if (element.jobStatus == 'INPROGRESS'){
            obj.value = 50;
          }
          else if(element.jobStatus == 'ABORTED'){
            obj.value = 0;
          }
          data.push(obj);

      })
      console.log(data,"data")
    }
    console.log(finial,"finial")

     const style={
       headderdiv:{
          width:"100%",
          Height:500,
          backgroundColor:blue300,
          textAlign:"center",
          color:white,
          paddingTop:50,
          paddingBottom:50
       }
     }
    return(
      <div>

        <div style={style.headderdiv}>
        <h1>"CAT Portal"</h1>
        <h5>"We don't just Sign Off , But we make it right !"</h5>
        </div>



        <div style={{width: '10%'}}>
            <BarChart ylabel='Quantity'
              width={1000}
              height={500}
              margin={margin}
              data={data}
               barWidth={40}
              onBarClick={this.handleBarClick}/>

        </div>
        </div>
    )
  }
}
