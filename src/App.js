import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import HitsList from "./components/HitsList";

class App extends Component {
	state = {
		hits: [],
		page: 0,
		query: ''
	}

	refreshHits = () => {
		fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&query=${this.state.query}`)
		.then(response => response.json())
		.then(data => this.setState({hits: data.hits}));
	}
	
	componentDidMount() {
		this.refreshHits();
	}

	render() {
		return (
			<React.Fragment>
				<div id="cover" className="container-fluid">
					<div className="container">
						<h1 className="mb-3">Zacker News</h1>
						<p>
							News & articles for information security professionals.<br/>
							A project by Zack Webster.
						</p>
						<input type="text" className="form-control" placeholder="Enter a search term and press ENTER"/>
					</div>
				</div>
				<div className="container p-3">
					<HitsList hits={this.state.hits}></HitsList>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
