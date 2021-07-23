import {GET_TECHS , ADD_TECH , DELETE_TECH , SET_LOADING , TECHS_ERROR} from './types'


// Get techs from server
export const getDevelopers = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/developers');
      const data = await res.json();
  
      dispatch({
        type: GET_TECHS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Add technician to server
  export const addDeveloper = developers => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/developers', {
        method: 'POST',
        body: JSON.stringify(developers),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_TECH,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  export const deleteDeveloper = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/developers/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_TECH,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Set loading to true
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  