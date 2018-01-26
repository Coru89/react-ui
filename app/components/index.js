import React, { Component } from 'react';
import { getUsers } from 'api/RandomUsers';
import ISO from 'api/ISO'
import UserCardList from 'components/UserCardList';
import { without } from 'lodash';
import AddUserForm from 'components/AddUserForm';

export default class MainComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventName: 'Birthday Party',
			users: []
		};
	}

	componentWillMount() {
		console.log('comp willy mount');
	}
	componentDidMount() {
		getUsers(6, users => {
			this.setState({
				users
			})
		})
	}
	
	removeUser(user) {
		const users = without(this.state.users, user);
		this.setState({
			users
		});
	}

	render() {

		const currentUsers = this.state.users;
		return (
			<div>
				<div className="row mb-3">
				 	<div className="col-lg-12">
						<AddUserForm /> 
					</div>
				</div>
				<div>
					<h3>
						{this.state.users.length} people are attending { this.state.eventName }
						</h3>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="card-columns">
							<UserCardList 
							users = { currentUsers }
							handleRemoveUser = { ::this.removeUser } //es7 syntax
							// handleRemoveUser = { this.removeUser.bind(this) } //since UserCardList won't have the scope of this,
																			 // we pass the scope of this with .bind(this)								
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

