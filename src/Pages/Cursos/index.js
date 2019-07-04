import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { getUser } from '../../Services/Auth';
import Api from '../../Services/Api';
import './Cursos.css';

function Cursos(props) {
	const [state, setState] = useState({});
	useEffect(() => {
		async function fecth() {
			const response = await Api.get(`/cursos/${getUser.id}`);
			setState(response.data);
		}
		fecth();
	}, []);

	function renderItens() {
		return Object.keys(state).map(
			(item, i) => console.log(item)

			//<ListGroupItem key={i}>{item.title}</ListGroupItem>
		);
	}
	return (
		<div className='curso'>
			{console.log(state)}
			<h1>Meus Cursos</h1>
			<ListGroup> {renderItens()}</ListGroup>
		</div>
	);
}

export default Cursos;
