export function startTyping() {
    return { 
        type: "START_TYPING_DESCRIPTION"
    }
}

export function finishTyping() {
    return { 
        type: "FINISH_TYPING_DESCRIPTION"
    }
}

export function resetDescTyping() {
    return {
        type: "RESET_TYPING_DESCRIPTION"
    }
}

export function startSpeech() {
    return {
        type: "START_SPEECH"
    }
}

export function finishSpeech() {
    return {
        type: "FINISH_SPEECH"
    }
}

export function resetSpeech() {
    return {
        type: "RESET_SPEECH"
    }
}