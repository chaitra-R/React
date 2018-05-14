import React from 'react';
import {blue300,black,white} from 'material-ui/styles/colors';
import GroupedBarChart from './groupedbarchart';

export default class Dashboard extends React.Component{

  render(){
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

        </div>
    )
  }
}
