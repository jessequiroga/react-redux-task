export default function (state = null, action) {
	switch (action.type) {
		case 'ATTRIBUTE_SELECTED':
			return action.payload.values;

	}

	return state;
}