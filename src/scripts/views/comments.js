import React from 'react'
import CommentSubmit from './commentSubmit'

var Comments = React.createClass({
	_listComments: function(commentsArray) {
		var commentArr = []
		for ( var i = 0; i < commentsArray.length; i++) {
			commentArr.push( <li><strong> {commentsArray[i].byUser} </strong> {commentsArray[i].message} </li> )
		}
		return commentArr
		
	},
	render: function() {
		var detailData = this.props.model
		return (
			<section className="comments">
				<ul>
					{this._listComments(detailData.get('comments'))}
				</ul>
				{/* <CommentSubmit /> */}
			</section>

		)
	}
})

export default Comments