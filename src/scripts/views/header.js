import React from 'react'

var Header = React.createClass({
	render: function() {
		return (
			<header className="header">
				<div className="header-wrapper">
					<a href="#home"><h1>InstaClone</h1></a>
					<input type="text" className="search" />
				</div>
			</header>
		)
	}
})

export default Header

// <img src=" { image_source_here} " />