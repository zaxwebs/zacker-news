import React, { Component } from "react";
import Hit from "./Hit.js";

class HitsList extends Component {

	render() {
		let hits = this.props.hits.map(hit => {
			return(
				<Hit key={hit.objectID} title={hit.title} url={hit.url} points={hit.points} comments={hit.num_comments} time={hit.created_at}/>
			);
		});
		return(
			<React.Fragment>
				{hits}
			</React.Fragment>
		);
	}
}

export default HitsList;