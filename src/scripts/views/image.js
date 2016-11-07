import React from 'react'

var Image = React.createClass({
	render: function() {
		var detailData = this.props.model
		return (
			<div className="image-wrapper">
				<img src={ detailData.get('imageURL') } />
			</div>
		)
	}
})

export default Image