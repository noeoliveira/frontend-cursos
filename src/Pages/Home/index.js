import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Spinner } from 'react-bootstrap';
import { Cards } from '../../Components';
import './Home.css';

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
			{cursos.length > 0 ? (
				<Cards data={cursos} />
			) : (
				<div className='cards'>
					<Spinner animation='border' variant='dark' />
				</div>
			)}
		</>
	);
}

export default Home;
