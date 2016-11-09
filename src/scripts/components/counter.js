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
			timeZone: 'stop', // past, stop, future, present
			intervalId: ''
		})
	},
	
	_runMachine: function() {
		if (this.state.timeZone === 'past') {
			clearInterval(this.state.intervalId)
			var intervalId = setInterval(this._backYear, 500)
			this.setState({intervalId: intervalId});
		}
		else if (this.state.timeZone === 'future') {
			clearInterval(this.state.intervalId)
			var intervalId = setInterval(this._forwardYear, 500)
			this.setState({intervalId: intervalId});
		}
	},

	_backYear: function() {
		this.setState({
			year: this.state.year - 1
		})
	},
	_forwardYear: function() {
		this.setState({
			year: this.state.year + 1,
		})
	},


	_goBack: function() {
		this.setState({
			timeZone: 'past',
			buttonPos: '0%',
		})
		this._runMachine()
	},
	_goForward: function() {
		this.setState({
			timeZone: 'future',
			buttonPos: '50%',
		})
		console.log('Checking State', this.state.timeZone)
		this._runMachine()
	},
	_goHere: function() {
		this.setState({
			timeZone: 'stop',
			buttonPos: '25%',
		})
		clearInterval(this.state.intervalId)
	},
	_goHome: function() {
		clearInterval(this.state.intervalId)
		this.setState({
			timeZone: 'present',
			buttonPos: '75%',
			year: (this.date()),
		})
	},

	render: function() {
		var containerClass = this.state.timeZone
		var buttonPos = {
			left: this.state.buttonPos
		}
		return (
			<div className="machine-counter">
				<div className="counter">
					<span>{this.state.year}</span>
				</div>
				<div className={'radio-container ' + containerClass}>
					<label htmlFor="go_back">Past</label>		<input type="radio" name="controls" id="go_back" 	value="go_back" 	onClick={this._goBack} />
					<label htmlFor="stop">Stop</label>				<input type="radio" name="controls" id="stop" 		value="stop" 		onClick={this._goHere} />
					<label htmlFor="go_forward">Future</label>	<input type="radio" name="controls" id="go_forward"	value="go_forward" 	onClick={this._goForward} />
					<label htmlFor="go_home">Home</label>		<input type="radio" name="controls" id="go_home" 	value="go_home" 	onClick={this._goHome} />
					<span className="toggle" style={buttonPos}><div></div></span>
				</div>
			</div>
		)
	}
})

export default Counter