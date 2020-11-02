const initialState = {
    start: false,
    finished: false
}

const descriptionReducer = (state=initialState, action) => {
    switch(action.type){
        case "START_TYPING_DESCRIPTION": {
            return {...state, 
                start: true,
                finished: false
            }
        }
        case "FINISH_TYPING_DESCRIPTION": {
            return {...state, 
                finished: true
            }
        }
        case "RESET_TYPING_DESCRIPTION": {
            return {...state, ...initialState }
        }
    }
    return state;
}

export default descriptionReducer;