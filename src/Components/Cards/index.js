import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cards.css';

function Cards(props) {
	const { data } = props;

	return (
		<div className='base'>
			{data.map(item => {
				return (
					<Card className='card' key={item.id}>
						<Card.Img
							variant='top'
							src='https://rockcontent.com/blog/wp-content/uploads/2017/01/formatos-de-imagem-2.jpg'
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant='primary'>Go somewhere</Button>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
}

export default Cards;
