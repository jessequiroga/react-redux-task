import React, { Component } from 'react';
import AttributesList from '../containers/attributes_list'
import ValuesList from '../containers/values_list'

export default class App extends Component {
  
  render() {
    return (
      <div>
      	<AttributesList />
      	<ValuesList />
      </div>
    );
  }
}
