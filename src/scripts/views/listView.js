import React from "react"
import Header from "./header"
import Footer from "./footer"
import Image from "./image"
import Comments from "./comments"
import CommentsHeader from "./commentsHeader"

var ListView = React.createClass({
	render: function() {
		return (
			<div className="list-body-container gallery">
				<Header />
				<div className="image-list">
					<Images collection={this.props.collection} />
				</div>
				<Footer />
			</div>
		)
	}
})

var Images = React.createClass({
	_getImages: function(modelsArr) {
		var imageArray = []
		for ( var i = 0; i < modelsArr.length; i++ ) {
			console.log(modelsArr[i])
			imageArray.push(
				<div className="image-container">
					<a href={'#detail/' + modelsArr[i].get('id')}>
					{<CommentsHeader model={modelsArr[i]} />}
					{<Image model={modelsArr[i]} />}
					{<Comments model={modelsArr[i]}  />}
					</a>
				</div>
			)

		}
		return imageArray
	},
	render: function() {
		var imagesData = this.props.collection
		var modelsArr = imagesData.models
		return (
			<div>
				{this._getImages(modelsArr)}
			</div>
		)
	}
})

export default ListView