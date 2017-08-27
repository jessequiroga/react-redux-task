import { SELECT_VALUE } from '../actions/index'

export default function (state = null, action) {
	switch (action.type) {
		case 'ATTRIBUTE_SELECTED':
			console.log(state)
			return action.payload;
			break; 								
												// **IMPORTANT CLARIFICATION**
		case SELECT_VALUE:                      //the selected_value is being added to the state.selected_attribute only
			let index = state.values.length 	//and not to the state.attributes directly because attributes are supposed to be updated
			return {							//through API response once the call is made (after fullfilment of the promise)
				...state,
				id: state.id,
				name: state.name,
				values: [ ...state['values'], action.payload ]
			}
	}
	return state;
}