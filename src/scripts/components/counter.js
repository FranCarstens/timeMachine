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
			intervalId: '',
			speed: '500',
			buttonPos: '25%'
		})
	},
	
	// _runMachine: function() {
	// 	if (this.state.timeZone === 'past') {
	// 		clearInterval(this.state.intervalId)
	// 		var intervalId = setInterval(this._backYear, 500)
	// 		this.setState({intervalId: intervalId});
	// 	}
	// 	else if (this.state.timeZone === 'future') {
	// 		clearInterval(this.state.intervalId)
			
	// 	}
	// },

	_backYear: function() {
		this.setState({
			year: this.state.year - 1
		})
		if (this.state.timeZone == 'past') this._goBack()
		else if (this.state.timeZone == 'present') this._goHome()
		else if (this.state.timeZone == 'stop') this.setState({ speed: 500 })
	},
	_forwardYear: function() {
		this.setState({
			year: this.state.year + 1,
		})
		if (this.state.timeZone == 'future') this._goForward()
		else if (this.state.timeZone == 'present') this._goHome()
		else if (this.state.timeZone == 'stop') this.setState({ speed: 500 })
	},


	_goBack: function() {
		this.setState({
			timeZone: 'past',
			buttonPos: '0%',
			speed: this.state.speed > 50 ? this.state.speed * .95 : this.state.speed = 50
		})
		setTimeout(this._backYear, this.state.speed)
	},
	_goForward: function() {
		console.log('running forward')
		this.setState({
			timeZone: 'future',
			buttonPos: '50%',
			speed: this.state.speed > 50 ? this.state.speed * .95 : this.state.speed = 50
		})
		setTimeout(this._forwardYear, this.state.speed)
	},
	_goHere: function() {
		this.setState({
			timeZone: 'stop',
			buttonPos: '25%',
		})
	},
	_goHome: function() {
		this.setState({
			timeZone: 'present',
			buttonPos: '75%',
		})
		if ( this.state.year == (this.date()) ||  this.state.year == (this.date()) ) {
			this.goHere()
		}
		else if (this.state.year > (this.date())) {
			this.setState({
				speed: (this.state.speed >= 50 && this.state.speed <=500 && (this.state.year - (this.date()) ) > 50 ) ? this.state.speed * .95 : this.state.speed / .95
			})
			setTimeout(this._backYear, this.state.speed)
		}
		else if (this.state.year < (this.date())) {
			this.setState({
				speed: (this.state.speed >= 50 && this.state.speed <= 500 && ( (this.date()) - this.state.year ) > 50 ) ? this.state.speed * .95 : this.state.speed / .95
			})
			setTimeout(this._forwardYear, this.state.speed)
		}
	},

	render: function() {
		var containerClass = this.state.timeZone
		var buttonPos = {
			left: this.state.buttonPos
		}
		console.log('counter.state',this.state)
		return (
			<div className="machine-counter">
				<div className="counter">
					<span>{this.state.year}</span>
				</div>
				<div className={'radio-container ' + containerClass}>
					<label className="go_back" 		htmlFor="go_back">Past			<div></div></label>		<input type="radio" name="controls" id="go_back" 		value="go_back" 	onClick={this._goBack} />
					<label className="stop" 		htmlFor="stop">Stop				<div></div></label>		<input type="radio" name="controls" id="stop" 			value="stop" 		onClick={this._goHere} />
					<label className="go_forward"	htmlFor="go_forward">Future		<div></div></label>		<input type="radio" name="controls" id="go_forward"		value="go_forward" 	onClick={this._goForward} />
					<label className="go_home" 		htmlFor="go_home">Home			<div></div></label>		<input type="radio" name="controls" id="go_home" 		value="go_home" 	onClick={this._goHome} />
					<span className={'toggle ' + containerClass} style={buttonPos}><div></div></span>
				</div>
				<div className="title">A Silly Little Time Machine</div>
			</div>
		)
	}
})

export default Counter