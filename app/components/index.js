import React, { Component } from 'react';
import { getUsers } from 'api/RandomUsers';
import ISO from 'api/ISO'
import UserCard from 'components/UserCard';

export default class MainComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventName: 'Birthday Party',
			users: []
		};
	}

	componentWillMount() {
		alert('comp willy mount');
	}
	componentDidMount() {
		getUsers(6, users => {
			this.setState({
				users
			})
		})
	}

	render() {

		const currentUsers = this.state.users;
		const cards = currentUsers.map((user, index) => {
			return <UserCard
				key={index}
				user={user}
			/>;
		})

		return (
			<div>
				<div>
					<h3>
						{this.state.users.length} people are attending {this.state.eventName}
						</h3>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="card-columns">
							{ cards }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

