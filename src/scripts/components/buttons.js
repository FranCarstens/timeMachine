import React from 'react'

const Buttons = React.createClass({
	_goForward: function() {
	},
	render: function() {
		return (
			<div className="radio-container">
				<input type="radio" name="controls" value="go_back" onClick={this._goBack} />
				<input type="radio" name="controls" value="stop" onClick={this._stopHere} />
				<input type="radio" name="controls" value="go_forward" onClick={this._goForward} />
				<input type="radio" name="controls" value="go_home" onClick={this._goHome} />
			</div>
		)
	}
})

export default Buttons