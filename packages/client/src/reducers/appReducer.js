const initialState = {
    fetching: false,
    fetched: false,
    error: false,
    items: "{}",
    empty: true,
    enter: true
}

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_ITEMS_PENDING": {
            return {...state,
                fetching: true
            }
        }   
        case "FETCH_ITEMS_REJECTED": {
            return {...state,
                fetching: false, 
                error: action.payload 
            }
        }
        case "FETCH_ITEMS_FULFILLED": {
            return {...state,
                fetching: false,
                fetched: true,
                items: action.payload 
            }
        }
        case "ENTER": {
            return {...state,
                 enter: action.payload
            }
        }
    }
    return state;
}

export default appReducer;