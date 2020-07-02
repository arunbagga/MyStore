import React from 'react';
import { Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

const image_folder = "./assets/images/";

function RenderApparel({apparel}) {
	return(
		<FadeTransform in
				transformProps={{exitTransform: 'scale(0.5) translateY(-50%'}}>
		<Card className="card-text">
	        <CardImg src={image_folder + apparel.image} alt={apparel.name} />
	        <CardTitle>{apparel.category + ' - ' +apparel.name}</CardTitle>
	        <CardText>{apparel.price + '$'}</CardText>
	    </Card>
	    </FadeTransform>
	);
}

const Apparels = (props) => {
	const var1 = props.list.map((apparel) => {
			return (
				<div className="col-6 col-md-3 mt-2 mb-2">
					<div key={apparel.id} >
						<RenderApparel apparel = {apparel} />
					</div>
				</div>
			);
	});
	return(
		<div>
			<div className="container">
				<div className="row">
					<Breadcrumb>
		            	<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
		            	<BreadcrumbItem active>{props.category}</BreadcrumbItem>
		          	</Breadcrumb>
				</div>
				<div className="row">
					{var1}
				</div>
			</div>
		</div>
	);
}

export default Apparels;