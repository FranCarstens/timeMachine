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
			year: this.state.year - 1
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
			if (myInterval) { window.clearInterval(myInterval) }
			myInterval = setInterval(this._goBack, 500)	
		}
		else if (e.target.value == 'stop') {
			if (myInterval) { window.clearInterval(myInterval) }
			this._goHere()
		}
		else if (e.target.value == 'go_forward') {
			clearInterval(myInterval)
			myInterval = setInterval(this._goForward, 500)	
		}
		else if (e.target.value == 'go_home') { 
			if (myInterval) window.clearInterval(myInterval)
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
					<input type="radio" name="controls" value="go_back" onClick={this._selected} />
					<input type="radio" name="controls" value="stop" onClick={this._selected} />
					<input type="radio" name="controls" value="go_forward" onClick={this._selected} />
					<input type="radio" name="controls" value="go_home" onClick={this._selected} />
				</div>
			</div>
		)
	}
})

export default Counter