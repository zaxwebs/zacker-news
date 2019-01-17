import React, { Component } from "react";
import TimeAgo from 'react-timeago';

class Hit extends Component {

	render() {
		const {title, url, points, comments, time} = this.props;
		const displayUrl = url && (url.length > 40 ? url.slice(0,40)+'...' : url);
		return(
			<React.Fragment>
				<div className="mb-5">
					<h5>{title}</h5>
					<a href={url}>{displayUrl}</a>
					<div className="text-secondary">{points} {points === 1 ? "point" : "points"} &middot; {comments} {comments === 1 ? "comment" : "comments"} &middot; <TimeAgo date={time}></TimeAgo></div>
				</div>
			</React.Fragment>
		);
	}
}

export default Hit;