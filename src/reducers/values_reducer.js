import orderBy from 'lodash/orderBy'
import { FETCH_VALUES } from '../actions/index'

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_VALUES:
            console.log(action.payload.data)
            return state.concat(orderBy(action.payload.data, ["mapped", "rank", "name"], ['desc', 'asc', 'asc']))
            
    }
    return state
}