import {GET_LOGS,SET_LOADING,LOGS_ERROR , ADD_LOG , DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS} from '../actions/types'

// export const getLogs = () => { 
//     //Redux thunk allows to return a function directly
//     return async (dispatch) =>{
//        setLoading(); 

//        const res = await fetch('/logs');
//        const data = await res.json();

//        dispatch({
//            type: GET_LOGS,
//            payload: data
//        });
//     }
// }

//import logs from sever
export const getLogs = () => async dispatch => { 
            try {
                setLoading();

                const res = await fetch('/logs');
                const data = await res.json();
         
                dispatch({
                    type: GET_LOGS,
                    payload: data
                });
             
            } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            })
            }
}

//Add new Log
export const addLog = (log) => async dispatch => { 
    try {
        setLoading();
        //FETCH API
        const res = await fetch('/logs', {
            method: 'POST', 
            body: JSON.stringify(log),
            headers: {
            'Content-Types': 'application/json'
            }});

        const data = await res.json();
 
        dispatch({
            type: ADD_LOG,
            payload: data
        });
     
    } catch (err) {
    dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
    })
    }
}

//Delete log from serve
export const deleteLog = (id) => async dispatch => { 
    try {
        setLoading();

       await fetch(`/logs/${id}`,{
           method: 'DELETE'
       })
 
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
     
    } catch (err) {
    dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
    })
    }
}
//Update Log
export const updateLog = (log) => async dispatch => { 
    try {
        setLoading();

     const res =   await fetch(`/logs/${log.id}`,{
           method: 'PUT',
           body: JSON.stringify(log),
           headers: {
               'Content-Type': 'application/json'
           }
       });

       const data  = await res.json();
 
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
     
    } catch (err) {
    dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
    })
    }
}
//Search Logs
export const searchLogs = (text) => async dispatch => { 
    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
 
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
     
    } catch (err) {
    dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
    })
    }
}
//SET CURRENT LOG
export const  setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//SET CURRENT LOG
export const  clearCurrent = log => {
    return {
        type: CLEAR_CURRENT
        //no need for payload becuasue it will be set to null
    }
}
//SET LOADING TO TRUE
export const setLoading  = () => {
    return {
        type: SET_LOADING
    };
}