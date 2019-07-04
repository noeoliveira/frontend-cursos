import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Sidebar, HeaderUser } from '../../Components';
import { Cursos } from '../';
import { getUser, logout } from '../../Services/Auth';
import './Dash.css';

function Dash() {
	const [state, setState] = useState({ sidebar: false });
	function handleSidebar() {
		setState({ sidebar: !state.sidebar });
	}
	return (
		<div className='dash'>
			<div>
				<Sidebar
					open={state.sidebar}
					onOpen={handleSidebar}
					onClose={handleSidebar}
					renderHeader={<HeaderUser user={getUser} />}>
					<ListGroup>
						<ListGroupItem action href='/DashBoard/Painel'>
							Painel
						</ListGroupItem>
						<ListGroupItem action href='/DashBoard/Cursos'>
							Meus Cursos
						</ListGroupItem>
						<ListGroupItem action href='/DashBoard/Message'>
							Mensagem
						</ListGroupItem>
						<ListGroupItem action href='/DashBoard/Config'>
							Configuração
						</ListGroupItem>
						<ListGroupItem action href='/' onClick={logout}>
							Sair
						</ListGroupItem>
					</ListGroup>
				</Sidebar>
			</div>
			<div className='box'>
				<Switch>
					<Route
						path='/DashBoard/'
						exact
						render={() => <Redirect to='/DashBoard/Painel' />}
					/>
					<Route path='/DashBoard/Painel' component={() => <h1>painel</h1>} />
					<Route path='/DashBoard/Cursos' component={Cursos} />
					<Route
						path='/DashBoard/Message'
						component={() => <h1>mensagem</h1>}
					/>
					<Route path='/DashBoard/Config' component={() => <h1>config</h1>} />
				</Switch>
			</div>
		</div>
	);
}

export default Dash;
