export function startTyping() {
    return { 
        type: "START_TYPING_TYPE"
    }
}

export function finishTyping() {
    return { 
        type: "FINISH_TYPING_TYPE"
    }
}

export function resetTypeTyping() {
    return {
        type: "RESET_TYPING_TYPE"
    }
}