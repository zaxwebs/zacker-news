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
		input: '',
		query: ''
	}

	componentDidMount() {
		this.refreshHits();
	}

	refreshHits = (query = '', page = 0) => {
		fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&query=${query}&page=${page}`)
		.then(response => response.json())
		.then(data => {
			this.setState({hits: data.hits});
		});
	}

	handleInput = (event) => {
		this.setState({
			input: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			query: this.state.input
		});
		this.refreshHits(this.state.input);
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
						<form onSubmit={this.handleSubmit}>
							<input type="text" className="form-control" value={this.state.input} placeholder="Enter a search term and press ENTER" onChange={this.handleInput}/>
						</form>
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
