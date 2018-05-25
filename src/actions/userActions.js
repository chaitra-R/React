import axios from 'axios';
export function setName(name){
  return function (dispatch){
   axios({
              method:'post',
              url: 'http://localhost:9000/api/buildresults/search/jobs/summary/limit/',
              data: {
                    "refresh": false,
                    "rangeFrom": 0,
                    "rangeCount": 5
                  }
          })
          .then(response => dispatch({
            type:"SET_NAME",
            payload:response.data
          }))
  };
}

export function setAge(age){
  return{
    type:"SET_AGE",
    payload:age
  };
}
