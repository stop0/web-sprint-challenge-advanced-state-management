import axios from 'axios';
import { smurfs } from "../mocks/handlers"
export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL"

export const fetchSmurfs = () => dispatch => {
    dispatch(fetchSmurfsLoading());
    axios
    .get("http://localhost:3333/smurfs")
    .then(res=>{
        console.log(res.data)
        dispatch(fetchSmurfsSuccess(res.data));
    })
    .catch(err=>{
        dispatch(fetchSmurfsFail(err.Response.code));
    });



}
export const fetchSmurfsLoading = () => {
    return({ type:FETCH_SMURFS_LOADING});
}

export const fetchSmurfsSuccess = (smurf) => {
    return({type:FETCH_SMURFS_SUCCESS, payload:smurf});
}

export const fetchSmurfsFail = (error) => {
    return({type:FETCH_SMURFS_FAIL, payload:error});
}
export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = smurf => {
    return dispatch => {
        axios.post("http://localhost:3333/smurfs", smurf)
             .then(res => {
                 dispatch({type: ADD_SMURF, payload: res.data})
             })
             .catch(err => console.log(err))
    };
};  

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.