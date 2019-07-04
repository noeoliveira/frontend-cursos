import React from 'react';
import { Image } from 'react-bootstrap';

function HeaderUser(props) {
	const { user } = props;
	return (
		<>
			<Image
				src='http://www.circuitovm.com.br/wp-content/uploads/2017/11/user-2517433_960_720.png'
				fluid
				style={{ maxHeight: '50px', marginTop: '-10px' }}
				roundedCircle
			/>
			<span>{user.name}</span>
		</>
	);
}

export default HeaderUser;
