import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as _ from 'lodash'
import { getValuesList, selectValue } from '../actions/index';
import { bindActionCreators } from 'redux';

class ValuesList extends Component {
	constructor(props) {
    super(props);
    this.state = {displayError: false};
  }

	componentWillMount() {
		this.props.getValuesList()
	}
	renderList() {
		return this.props.values.map((value) => {
			return (
				<li 
					className={'list-group-item ' + this.getSelectedValues(value.id)} 
					key={value.id}
					style={{color: this.getElementStyle(value.rank)}}
					onClick = {() => this.emitSelectedValue(value)}>
						{value.name}
				</li>
			)
		})
	}

	emitSelectedValue(value) {
		if(this.props.selected_attribute === null) {
			this.setState({displayError: true})
			return 
		}
		else {
			this.setState({displayError: false})
			this.props.selectValue({id: value.id, name: value.name})
		}	
		
	}

	getElementStyle(rank) {
		switch (rank) {
			case 1:
				return 'green'
				break;
			case 2:
				return 'orange'
				break;
			case 3:
				return 'red'
				break;
			
			default:
				return '#ddd'
				break;
		}
	}

	getSelectedValues(id) {
		if(this.props.selected_values) {
			for (var i = 0; i < this.props.selected_values.length; i++) {
				if(this.props.selected_values[i].id === id)
					return 'active'
			}	
		}
		return ''
	}

	render() {
		let errorMsg = null
		if(this.state.displayError)
			errorMsg = <div>Please Select Attribute first</div>
		else {
			errorMsg = <div></div>
		}
		return (
			<div>
				<ul className = "list-group col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-2">
					{this.renderList()}
				</ul>
				{errorMsg}
			</div>
			

		)
	}
}

function mapStateToProps (state) {
	return {
		values: state.values,
		selected_values: state.selected_values,
		selected_attribute: state.selected_attribute
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getValuesList, selectValue }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(ValuesList)