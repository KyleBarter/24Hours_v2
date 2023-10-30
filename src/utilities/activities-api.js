import sendRequest from './send-request'

const BASE_URL = "/api/activities"

export function getTodaysActivities() {
    return sendRequest(`${BASE_URL}/`)
}

export function getSingleActivity(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addActivity(formData) {
    return sendRequest(`${BASE_URL}/`, 'POST', formData)
}

export function editActivity(id, formData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData)
}

export function deleteActivity(activityId) {
    return sendRequest(`${BASE_URL}/${activityId}`, 'DELETE')
}

