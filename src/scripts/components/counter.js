import React from 'react'
const Counter = React.createClass({
	date: function() {
		var currentTime = new Date()
		var year = currentTime.getYear() + 1900
		return year
	},
	getInitialState: function() {
		return ({
			year: (this.date()),
			directionFunc: ''
		})
	},
	_goBack: function() {
		this.setState({
			year: this.state.year - 1,
		})
	},
	_goHere: function() {
		this.setState({
			year: this.state.year
		})
	},
	_goForward: function() {
		this.setState({
			year: this.state.year + 1
		})
	},
	_goHome: function() {
		this.setState({
			year: (this.date()),
		})
	},
	_selected: function(e) {
		var myInterval = ''
		if (e.target.value == 'go_back') {
			this._goBack()
		}
		else if (e.target.value == 'stop') {
			this._goHere()
		}
		else if (e.target.value == 'go_forward') {
			this._goForward()
		}
		else if (e.target.value == 'go_home') { 
			this._goHome()
		}
	},
	render: function() {
		return (
			<div>
				<div>
					<span>{this.state.year}</span>
				</div>
				<div className="radio-container">
					<label for="go_back">Go Back</label>		<input type="radio" name="controls" id="go_back" 	value="go_back" 	onClick={this._selected} />
					<label for="stop">Stop</label>				<input type="radio" name="controls" id="stop" 		value="stop" 		onClick={this._selected} />
					<label for="go_forward">Go Forward</label>	<input type="radio" name="controls" id="go_forward"	value="go_forward" 	onClick={this._selected} />
					<label for="go_home">Go Home</label>		<input type="radio" name="controls" id="go_home" 	value="go_home" 	onClick={this._selected} />
				</div>
			</div>
		)
	}
})
export default Counter