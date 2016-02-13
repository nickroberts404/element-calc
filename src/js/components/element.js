// element.js

const React = require('react');
const PeriodicTable = require('mendeleev').PeriodicTable;

class Element extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}
	onClick () {
		this.props.onClick(this.props.element);
	}
	render () {
		var data = PeriodicTable.getElement(this.props.element);
		return (
			<td 
				className = {'element type-'+data.type}
				onClick = {this.onClick}>
				<div className = 'content'>
					<div className="number">{data.number}</div>
					<div className="symbol">{data.symbol}</div>
					<div className="mass">{Math.round(data.mass*100)/100}</div>
				</div>
			</td>
		)
	}
}

module.exports = Element;