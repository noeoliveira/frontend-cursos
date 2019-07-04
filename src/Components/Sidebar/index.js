import React from 'react';
import { Button } from 'react-bootstrap';

import './Sidebar.css';
function Header(props) {
	return (
		<div className='header'>
			<Button className='btn-icons btn-close' onClick={props.onClose}>
				<span className='fas fa-angle-left' />
			</Button>
			{props.render}

			<hr />
		</div>
	);
}

function Sidebar(props) {
	const { open, renderHeader } = props;
	return (
		<>
			<Button className='btn-icons' onClick={props.onOpen} hidden={open}>
				<span className='fas fa-bars' />
			</Button>
			<div className='base-sidebar' hidden={!open}>
				<Header render={renderHeader} onClose={props.onClose} />
				{props.children}
			</div>
		</>
	);
}

export default Sidebar;
