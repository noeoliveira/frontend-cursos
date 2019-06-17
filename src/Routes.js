import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Dash, Login } from './Pages';
import { isAuthenticated } from './Services/Auth';

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/Login', state: { from: props.location } }}
					/>
				)
			}
		/>
	);
}

function Routes() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/Login' component={Login} />
			<PrivateRoute path='/DashBoard' component={Dash} />
		</Switch>
	);
}

export default Routes;
