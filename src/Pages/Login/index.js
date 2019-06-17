import React, { useState } from 'react';
import { InputGroup, FormControl, Form, Button, Image } from 'react-bootstrap';
import Play from '../../Assets/play.gif';
import './Login.css';

import Api from '../../Services/Api';
import { login } from '../../Services/Auth';

function Login(props) {
	const [state, setState] = useState({});

	async function handleSubmit(event) {
		event.preventDefault();
		const user = await Api.post('/auth', {
			email: state.username,
			password: state.password
		});
		login(user.data);
		props.history.push('/DashBoard');
	}
	function handleUsername(event) {
		const username = event.target.value;
		setState({ ...state, username });
	}
	function handlePassword(event) {
		const password = event.target.value;
		setState({ ...state, password });
	}
	return (
		<div className='container'>
			<Image src={Play} className='play' />
			<Form onSubmit={handleSubmit} className='form'>
				<InputGroup className='mb-3'>
					<InputGroup.Prepend>
						<InputGroup.Text>@</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder='Username'
						autoComplete='username'
						onChange={handleUsername}
						required
					/>
				</InputGroup>
				<InputGroup className='mb-3'>
					<InputGroup.Prepend>
						<InputGroup.Text>
							<span className='fas fa-key' />
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder='Password'
						type='password'
						autoComplete='current-password'
						onChange={handlePassword}
						required
					/>
				</InputGroup>
				<Button type='submit'>Login</Button>
			</Form>
		</div>
	);
}

export default Login;
