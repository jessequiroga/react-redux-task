import { FETCH_ATTRIBUTES } from '../actions/index'
import { FETCH_UPDATED_ATTRIBUTES } from '../actions/index'

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ATTRIBUTES:
			return action.payload.data
			break;
		case FETCH_UPDATED_ATTRIBUTES:
			return [...state, action.payload.data]			//patch request is not returning expected result
															//that's why there is an error in console.
	}

	return state
}