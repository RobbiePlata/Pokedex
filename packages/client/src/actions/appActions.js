import Axios from "axios";

export function fetchItems() {
    return { 
        type: "FETCH_ITEMS", 
        payload: Axios.get("http://localhost:3001/")
    }
}

export function itemsFilled() {
    return {
        type: "ITEMS_FILLED"
    }
}

export function itemsEmpty() {
    return {
        type: "ITEMS_EMPTY"
    }
}

export function enterTransition() {
    return {
        type: "ENTER_TRANSITION"
    }
}

export function exitTransition() {
    return {
        type: "EXIT_TRANSITION"
    }
}