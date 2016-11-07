import React from 'react'
import Header from './header'
import Footer from './footer'
// import Likes from './likes'
import CommentsHeader from './commentsHeader'
import Comments from './comments'
import Image from './image'

var DetailView = React.createClass({
	render: function() {
		
		return (
			<div className="detail-body-container">
				<Header />
				<div className="flex-wrapper">
					<ImagePost model={this.props.model} />
				</div>
				<Footer />
			</div>
		)
	}
})

var ImagePost = React.createClass({
	render: function() {
		var detailData = this.props.model
		return (			
			<section className="image-wrapper">
				<div className="image-container">
					<Image model={this.props.model} />
				</div>
				<div className="details-container">
					<CommentsHeader model={this.props.model} />
					<Comments model={this.props.model} />
				</div>
			</section>
		)
	}
})

export default DetailView