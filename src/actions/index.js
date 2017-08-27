import axios from 'axios'
import thunk from 'redux-thunk'

const API_URL = 'http://demo0113689.mockable.io/'

export const FETCH_ATTRIBUTES = 'FETCH_ATTRIBUTES'
export const FETCH_VALUES = 'FETCH_VALUES'
export const SELECT_VALUE = 'SELECT_VALUE'
export const ATTRIBUTE_SELECTED = 'ATTRIBUTE_SELECTED'
export const FETCH_UPDATED_ATTRIBUTES = 'FETCH_UPDATED_ATTRIBUTES'

export function selectAttribute (attribute) {
	return {
		type: ATTRIBUTE_SELECTED,
		payload: attribute
	}
}

export function getAttributesList() {
	const url = `${API_URL}attributes`
	const request = axios.get(url)
	
	return {
		type: FETCH_ATTRIBUTES,
		payload: request
	}
}

export function getValuesList() {
	const url = `${API_URL}values`
	const request = axios.get(url)
	
	return {
		type: FETCH_VALUES,
		payload: request
	}
}

export function selectValue(value) {
	const url = `${API_URL}attributes`
	const request = axios.patch(url, {value_id: value.id})			//patch request is not returing expected result as given in the document.
	// return {
	// 	type: SELECT_VALUE,
	// 	payload: value
	// }
	return dispatch => {
		dispatch({
			type: SELECT_VALUE,
			payload: value
		})
		return request.then(
			response => dispatch({
				type: FETCH_UPDATED_ATTRIBUTES,
				payload: response
			})
			)
	}
}