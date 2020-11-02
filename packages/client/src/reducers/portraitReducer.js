const initialState = {
    ready: true,
    complete: false
}

const portraitReducer = (state={}, action) => {
    switch(action.type){
        case "IS_READY": {
            state = {...state, ready: action.payload}
            break;
        }
        case "Complete": {
            state = {...state, complete: action.payload}
            break;
        }
    }
    return state;
};

export default portraitReducer;