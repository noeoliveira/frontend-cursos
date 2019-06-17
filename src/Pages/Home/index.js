import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Cards } from '../../Components';

import Api from '../../Services/Api';

function Home() {
	const [cursos, setCursos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await Api.get('/cursos');
			const { data } = response;
			setCursos(data);
		}
		fetchData();
	}, []);

	return (
		<>
			<Navbar bg='info' variant='dark'>
				<Navbar.Brand href='/'>Navbar</Navbar.Brand>
				<Nav className='ml-auto'>
					<Button variant='outline-light' href='/DashBoard'>
						<span className='fas fa-user icon' />
						Login
					</Button>
				</Nav>
			</Navbar>
			<Cards data={cursos} />
		</>
	);
}

export default Home;
