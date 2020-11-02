import Axios from "axios";

export function fetchItems() {
    return { 
        type: "FETCH_ITEMS", 
        payload: Axios.get("http://localhost:3001/")
    }
}

export function enter() {
    return {
        type: "ENTER",
        payload: true
    }
}

export function currentStatus(payload) {
    return {
        type: "ENTER",
        payload: payload
    }
}
