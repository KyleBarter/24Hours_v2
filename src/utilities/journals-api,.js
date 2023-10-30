import sendRequest from "./send-request";

const BASE_URL = "/api/activities"

export function createJournal(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST')    
}