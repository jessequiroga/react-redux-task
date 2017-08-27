import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectAttribute, getAttributesList  } from '../actions/index';
import { bindActionCreators } from 'redux';

class AttributesList extends Component {
	componentWillMount() {
	  	this.props.getAttributesList()
	}
	renderList() {
		return this.props.attributes.map((attribute) => {
			return (
				<li 
					className={this.getClassName(attribute.id)} 
					key={attribute.id}
					onClick={() => this.props.selectAttribute(attribute)}>
						{attribute.name}: {this.renderValuesName(attribute)}
				</li>
			)
		})
	}

	renderValuesName(attribute) {
		let values = attribute.values
		if(this.props.selected_attribute) {
			values = this.props.selected_attribute.id === attribute.id ? this.props.selected_attribute.values : attribute.values
		}
		let valuesLength = values.length
		return values.map((value, index) => {
			if(valuesLength > index + 1)
				return (
					<span key={value.id}> {value.name}, </span>
				)
			return (
				<span key={value.id}> {value.name} </span>
			)
		})
	}

	getClassName(id) {
		if(this.props.selected_attribute) {
			if(this.props.selected_attribute.id === id)
				return 'list-group-item active'

			return 'list-group-item'
		}
		return 'list-group-item'
	}
	render() {
		return (
			<ul className = "list-group col-sm-5 col-sm-offset-1 col-sm-5 col-sm-offset-1">
				{this.renderList()}
			</ul>	
		)
	}
}

function mapStateToProps (state) {
	return {
		attributes: state.attributes,
		selected_attribute: state.selected_attribute
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ selectAttribute, getAttributesList }, dispatch)
	
}

export default connect (mapStateToProps, mapDispatchToProps)(AttributesList)