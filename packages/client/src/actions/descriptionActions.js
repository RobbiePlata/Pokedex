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