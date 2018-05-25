import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../theme-default';
import NavBar from '../components/nav';
import Dashboard from '../components/dashboard';
import GroupedBarChart from '../components/groupedbarchart';
import Jobcount from '../components/jobcount';
import MasterJob from '../components/masterjobs';
import JobStatus from '../components/jobstatus';
import axios from 'axios';
import { connect } from 'react-redux';
import { setName } from "../actions/userActions";
import { Button } from 'react-bootstrap';


 class App extends React.Component {
  constructor(props){
        super(props);

        // this.onChangeLinkName =  this.onChangeLinkName.bind(this);
          var url =
          axios({
          method: 'post',
          url: 'http://localhost:9000/api/buildresults/search/jobs/summary/limit/',
          data: {
                "refresh": false,
                "rangeFrom": 0,
                "rangeCount": 5
              }
        })
         .then(response => console.log(response,"iiii"))
        var app2 = {
               "jobName": "*",
               "rangeFrom": 0,
               "rangeCount": 5
             };

        axios.get('http://localhost:9000/api/soapbuild/search/jobs/limit/' +JSON.stringify(app2))
        .then(function (response) {
        })

        var masterArray = [
          {
              "_id": "5ad60d69921dfc4bac8ebf29",
              "passedCount": 1,
              "failedCount": 2,
              "notRunCount": 28,
              "allCount": 31,
              "environment": "QA1:silo1:FullRegression",
              "startDateTime": "2018-04-17T08:06:03Z",
              "jobName": "CAT_MultiJob_Testing",
              "buildReference": "151",
              "__v": 0,
              "endDateTime": "2018-04-17T15:06:03.000Z",
              "subBuilds": [
                  {
                      "masterBuild": {
                          "buildReference": "150",
                          "jobName": "CAT_MultiJob_Testing"
                      },
                      "_id": "5ad60df429428199e80763a0",
                      "buildReference": "155",
                      "jobName": "CAT_Flight_Hotel",
                      "allCount": 11,
                      "notRunCount": 10,
                      "failedCount": 1,
                      "passedCount": 0,
                      "jobStatus": "COMPLETED",
                      "endDateTime": "2018-04-17T15:08:45Z",
                      "startDateTime": "2018-04-17T15:06:47Z",
                      "environment": "QA1:silo1:FullRegression",
                      "updatedOn": "2018-04-17T15:08:45Z",
                      "__v": 0
                  },
                  {
                      "masterBuild": {
                          "buildReference": "151",
                          "jobName": "CAT_MultiJob_Testing"
                      },
                      "_id": "5ad60e6f29428199e80763a1",
                      "buildReference": "156",
                      "jobName": "CAT_Flight_Car",
                      "allCount": 11,
                      "notRunCount": 10,
                      "failedCount": 1,
                      "passedCount": 0,
                      "jobStatus": "",
                      "endDateTime": "",
                      "startDateTime": "2018-04-17T15:06:48Z",
                      "environment": "QA1:silo1:FullRegression",
                      "updatedOn": "2018-04-17T15:06:48Z",
                      "__v": 0
                  },
                  {
                      "masterBuild": {
                          "buildReference": "151",
                          "jobName": "CAT_MultiJob_Testing"
                      },
                      "_id": "5ad60ec029428199e80763a2",
                      "buildReference": "153",
                      "jobName": "CAT_FlightOnly",
                      "allCount": 9,
                      "notRunCount": 8,
                      "failedCount": 0,
                      "passedCount": 1,
                      "jobStatus": "",
                      "endDateTime": "",
                      "startDateTime": "2018-04-17T15:06:45Z",
                      "environment": "QA1:silo1:FullRegression",
                      "updatedOn": "2018-04-17T15:06:45Z",
                      "__v": 0
                  }
              ]
          },
          {
              "_id": "5ad60d69921dfc4bac8ebf29",
              "passedCount": 1,
              "failedCount": 2,
              "notRunCount": 28,
              "allCount": 31,
              "environment": "QA1:silo1:FullRegression",
              "startDateTime": "2018-04-17T08:06:03Z",
              "jobName": "CAT_MultiJob_Testing",
              "buildReference": "152",
              "__v": 0,
              "endDateTime": "2018-04-17T15:06:03.000Z",
              "subBuilds": [
                  {
                      "masterBuild": {
                          "buildReference": "150",
                          "jobName": "CAT_MultiJob_Testing"
                      },
                      "_id": "5ad60df429428199e80763a0",
                      "buildReference": "155",
                      "jobName": "CAT_Flight_Hotel",
                      "allCount": 11,
                      "notRunCount": 7,
                      "failedCount": 1,
                      "passedCount": 2,
                      "jobStatus": "COMPLETED",
                      "endDateTime": "2018-04-17T15:08:45Z",
                      "startDateTime": "2018-04-17T15:06:47Z",
                      "environment": "QA1:silo1:FullRegression",
                      "updatedOn": "2018-04-17T15:08:45Z",
                      "__v": 0
                  },
                  {
                      "masterBuild": {
                          "buildReference": "151",
                          "jobName": "CAT_MultiJob_Testing"
                      },
                      "_id": "5ad60e6f29428199e80763a1",
                      "buildReference": "156",
                      "jobName": "CAT_Flight_Car",
                      "allCount": 11,
                      "notRunCount": 5,
                      "failedCount": 1,
                      "passedCount": 5,
                      "jobStatus": "",
                      "endDateTime": "",
                      "startDateTime": "2018-04-17T15:06:48Z",
                      "environment": "QA1:silo1:FullRegression",
                      "updatedOn": "2018-04-17T15:06:48Z",
                      "__v": 0
                  },
                  {
                      "masterBuild": {
                          "buildReference": "151",
                          "jobName": "CAT_MultiJob_Testing"
                      },
                      "_id": "5ad60ec029428199e80763a2",
                      "buildReference": "153",
                      "jobName": "CAT_FlightOnly",
                      "allCount": 9,
                      "notRunCount": 8,
                      "failedCount": 0,
                      "passedCount": 1,
                      "jobStatus": "",
                      "endDateTime": "",
                      "startDateTime": "2018-04-17T15:06:45Z",
                      "environment": "QA1:silo1:FullRegression",
                      "updatedOn": "2018-04-17T15:06:45Z",
                      "__v": 0
                  }
              ]
          }

        ]


            var array = {
            "searchQuery": {
                "rangeFrom": 0,
                "rangeCount": 5
            },
            "searchResult": [
                {
                    "_id": "5ad5c26f29428199e807639b",
                    "buildReference": "151",
                    "jobName": "CAT_Flight_Hotel",
                    "allCount": 11,
                    "notRunCount": 10,
                    "failedCount": 1,
                    "passedCount": 0,
                    "jobStatus": "COMPLETED",
                    "endDateTime": "",
                    "startDateTime": "2018-04-17T09:39:07Z",
                    "environment": "QA2:silo1:FullRegression",
                    "updatedOn": "2018-04-17T09:39:07Z",
                    "__v": 0
                },
                {
                    "_id": "5ad5a5839c2be6eea9580d87",
                    "buildReference": "148",
                    "jobName": "CAT_FlightOnly",
                    "allCount": 11,
                    "notRunCount": 10,
                    "failedCount": 1,
                    "passedCount": 0,
                    "jobStatus": "ABORTED",
                    "endDateTime": "",
                    "startDateTime": "2018-04-17T07:41:05Z",
                    "environment": "QA1:silo1:FullRegression",
                    "updatedOn": "2018-04-17T07:41:05Z",
                    "__v": 0
                },
                {
                    "_id": "5ad5ab0f9c2be6eea9580d8b",
                    "buildReference": "152",
                    "jobName": "CAT_Flight_Car",
                    "allCount": 11,
                    "notRunCount": 10,
                    "failedCount": 1,
                    "passedCount": 0,
                    "jobStatus": "COMPLETED",
                    "endDateTime": "",
                    "startDateTime": "2018-04-17T08:04:25Z",
                    "environment": "QA1:silo1:FullRegression",
                    "updatedOn": "2018-04-17T08:04:25Z",
                    "__v": 0
                },
                {
                    "_id": "5ad5a6e19c2be6eea9580d88",
                    "buildReference": "151",
                    "jobName": "CAT_FlightOnly",
                    "allCount": 11,
                    "notRunCount": 5,
                    "failedCount": 1,
                    "passedCount": 5,
                    "jobStatus": "INPROGRESS",
                    "endDateTime": "",
                    "startDateTime": "2018-04-17T07:42:34Z",
                    "environment": "QA1:silo1:FullRegression",
                    "updatedOn": "2018-04-17T07:42:34Z",
                    "__v": 0
                },
                {
                    "_id": "5ad60d69921dfc4bac8ebf29",
                    "passedCount": 1,
                    "failedCount": 2,
                    "notRunCount": 28,
                    "allCount": 31,
                    "environment": "QA1:silo1:FullRegression",
                    "startDateTime": "2018-04-17T08:06:03Z",
                    "jobName": "CAT_MultiJob_Testing",
                    "buildReference": "152",
                    "__v": 0,
                    "endDateTime": "2018-04-17T15:06:03.000Z",
                    "subBuilds": [
                        {
                            "masterBuild": {
                                "buildReference": "150",
                                "jobName": "CAT_MultiJob_Testing"
                            },
                            "_id": "5ad60df429428199e80763a0",
                            "buildReference": "155",
                            "jobName": "CAT_Flight_Hotel",
                            "allCount": 11,
                            "notRunCount": 7,
                            "failedCount": 1,
                            "passedCount": 2,
                            "jobStatus": "COMPLETED",
                            "endDateTime": "2018-04-17T15:08:45Z",
                            "startDateTime": "2018-04-17T15:06:47Z",
                            "environment": "QA1:silo1:FullRegression",
                            "updatedOn": "2018-04-17T15:08:45Z",
                            "__v": 0
                        },
                        {
                            "masterBuild": {
                                "buildReference": "151",
                                "jobName": "CAT_MultiJob_Testing"
                            },
                            "_id": "5ad60e6f29428199e80763a1",
                            "buildReference": "156",
                            "jobName": "CAT_Flight_Car",
                            "allCount": 11,
                            "notRunCount": 5,
                            "failedCount": 1,
                            "passedCount": 5,
                            "jobStatus": "",
                            "endDateTime": "",
                            "startDateTime": "2018-04-17T15:06:48Z",
                            "environment": "QA1:silo1:FullRegression",
                            "updatedOn": "2018-04-17T15:06:48Z",
                            "__v": 0
                        },
                        {
                            "masterBuild": {
                                "buildReference": "151",
                                "jobName": "CAT_MultiJob_Testing"
                            },
                            "_id": "5ad60ec029428199e80763a2",
                            "buildReference": "153",
                            "jobName": "CAT_FlightOnly",
                            "allCount": 9,
                            "notRunCount": 8,
                            "failedCount": 0,
                            "passedCount": 1,
                            "jobStatus": "",
                            "endDateTime": "",
                            "startDateTime": "2018-04-17T15:06:45Z",
                            "environment": "QA1:silo1:FullRegression",
                            "updatedOn": "2018-04-17T15:06:45Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "message": ""
        }
        this.state = {
          data: array,
          home_link : "selenium_testing"

        }


  };

  // onChangeLinkName(newName){  //passdata from parent to child
  //   this.setState({
  //     home_link : newName
  //   })
  //
  // }

//   componentDidMount() {
//   fetch("http://localhost:9000/api/soapbuild/search/jobs/limit/",{
//     method:'POST',
//     data:{
//       "refresh": false,
//        "rangeFrom": 0,
//        "rangeCount": 5
//     },
//     headers: {
//               "content-type": "application/json"
//     }
//   })
//   .then(function(response) {
// console.log(array,"array")
//     }).then(function(body) {
//       console.log(body);
//     });
//       }

  render() {
    const styles ={
      container: {
      margin: '80px 20px 20px 15px',
      paddingLeft:50
    },

    }
    return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
            <div>
                <NavBar/>
                 <Dashboard />
                 <div className ="row">
                     <div className = "col-md-12">
                       <GroupedBarChart result = {this.state.data}/>
                     </div>
                 </div>
                 <div className ="row">
                     <div className ="col-md-4">
                      <Jobcount result = {this.state.data}/>
                     </div>
                     <div className = "col-md-4">
                        <JobStatus result = {this.state.data}/>
                     </div>
                     <div className ="col-md-4">
                       <MasterJob result = {this.state.data} data={this.props.user.name}
                       changeLink={this.onChangeLinkName}/>
                     </div>
                 </div>
                 <Button type="submit" onClick = {() => this.props.setName("chaitra")}>submit</Button>

            </div>
        </MuiThemeProvider>
    );
  }
}

//which properties of global state i need to use
const mapStateToProps = (state) => {
    return {
      user : state.user,
      math : state.math      // here i'm using all the properties of my global state from both reducers
    };
};
//which action i need to exectue and pass to reducer
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
         dispatch(setName(name));
       },

    };
};
//connect each component to store which needs access to store//
export default connect(mapStateToProps,mapDispatchToProps)(App);
