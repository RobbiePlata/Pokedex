const initialState = {
    start: false,
    finished: false,
    startSpeech: false,
    finishSpeech: false
}

const descriptionReducer = (state=initialState, action) => {
    switch(action.type){
        case "START_TYPING_DESCRIPTION": {
            return {...state, 
                start: true
            }
        }
        case "FINISH_TYPING_DESCRIPTION": {
            return {...state, 
                finished: true
            }
        }
        case "RESET_TYPING_DESCRIPTION": {
            return {...state, 
                start: false,
                finished: false
            }
        }
        case "START_SPEECH": {
            return {...state, 
                startSpeech: true
            }
        }
        case "FINISH_SPEECH": {
            return {...state, 
                finishSpeech: true
            }
        }
        case "RESET_SPEECH": {
            return {...state, 
                startSpeech: false,
                finishSpeech: false
            }
        }
    }
    return state;
}

export default descriptionReducer;