import { combineReducers } from 'redux';
import AttributesReducer from './attributes_reducer'
import ValuesReducer from './values_reducer';
import AttributeSelectedReducer from './selected_attribute_reducer';
import ValueSelectedReducer from './selected_value_reducer';

const rootReducer = combineReducers({
  attributes: AttributesReducer,
  values: ValuesReducer,
  selected_attribute: AttributeSelectedReducer,
  selected_values: ValueSelectedReducer
});

export default rootReducer;
