const initialState = {
    fetching: false,
    fetched: false,
    error: false,
    items: {},
    enter: false,
    empty: true
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
        case "ITEMS_FILLED": {
            return {...state,
                empty: false
            }
        }
        case "ITEMS_EMPTY": {
            return {...state,
                empty: true
            }
        }
        case "ENTER_TRANSITION": {
            return {...state,
                enter: true
            }
        }
        case "EXIT_TRANSITION": {
            return {...state,
                enter: false
            }
        }
        
    }
    return state;
}

export default appReducer;