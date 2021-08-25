import {GET_LOGS,SET_LOADING,LOGS_ERROR , ADD_LOG} from '../actions/types'

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
        payload: err.response.data
    })
    }
}


//SET LOADING TO TRUE
export const setLoading  = () => {
    return {
        type: SET_LOADING
    };
}