import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {


	onSearchSubmit(term) {
		const api = 'https://api.unsplash.com/';
		axios.get(`${ api }search/photos`, {
			params: {
				query: term
			},
			headers: {
				Authorization: 'Client-ID 956353f9d322a9f3cb3e61708da66ed2a6ed4d764f9aaf12db11892f439b8ac5'
			}
		}).then((response) => {
			console.log(response);
		});
	}

	render() {
		return (
			<div className="ui container" style={ { marginTop: '10px' } }>
				<SearchBar onSubmit={ this.onSearchSubmit }/>
			</div>
		);
	}
}

export default App;
