const initialState = {
    start: false,
    finished: false
}

const typeReducer = (state=initialState, action) => {
    switch(action.type){
        case "START_TYPING_TYPE": {
            return {...state, 
                start: true
            }
        }
        case "FINISH_TYPING_TYPE": {
            return {...state, 
                finished: true
            }
        }
        case "RESET_TYPING_TYPE": {
            return {...state, ...initialState }
        }
    }
    return state;
}

export default typeReducer;