import React, { Component } from "react";
import TimeAgo from 'react-timeago';

class Hit extends Component {

	render() {
		const {title, url, points, comments, time} = this.props;
		return(
			<React.Fragment>
				<div className="mb-5">
					<h5>{title}</h5>
					<a href={url}>{url}</a>
					<div className="text-secondary">{points} {points === 1 ? "point" : "points"} &middot; {comments} {comments === 1 ? "comment" : "comments"} &middot; <TimeAgo date={time}></TimeAgo></div>
				</div>
			</React.Fragment>
		);
	}
}

export default Hit;