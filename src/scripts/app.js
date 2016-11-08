import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import Buttons from './components/buttons'

var TimeMachine = React.createClass({
	render: function() {
		return (
			<div className="time-machine">
				<Counter />
				{/*<Buttons />*/}
			</div>
		)
	}
})

ReactDOM.render(<TimeMachine />, document.querySelector('.body-wrapper'))