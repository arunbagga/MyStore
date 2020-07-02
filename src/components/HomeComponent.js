import React from 'react';
import { Jumbotron, Card, CardImg, CardTitle } from 'reactstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

export const Categories = () => {
	return(
		<FadeTransform in
				transformProps={{exitTransform: 'scale(0.5) translateY(-50%'}}>
		<div className="container">
			<div className="row">
				<div className="col-6 col-md-3 mt-4 mb-4">
					<Link to="/men">
			            <Card>
			            	<CardImg src="assets/images/men.png" alt="" />
			                	<CardTitle className="cat-icon-text">MEN</CardTitle>
			            </Card>
			        </Link>
	            </div>		        
		        <div className="col-6 col-md-3 mt-4 mb-4">
		        	<Link to="/men">
			            <Card>
			            	<CardImg src="assets/images/women.png" alt="" />
			                <CardTitle className="cat-icon-text">WOMEN</CardTitle>
			            </Card>
			        </Link>
		        </div>
		        <div className="col-6 col-md-3 mt-4 mb-4">
		        	<Link to="/men">
			            <Card>
			            	<CardImg src="assets/images/kids.png" alt="" />
			                <CardTitle className="cat-icon-text">KIDS</CardTitle>
			            </Card>
			        </Link>
	            </div>
	        	<div className="col-6 col-md-3 mt-4 mb-4">
		        	<Link to="/men">
			            <Card>
			            	<CardImg src="assets/images/furnish.png" alt=""	 />
			                <CardTitle className="cat-icon-text">HOME FURNISHINGS</CardTitle>
			            </Card>
		            </Link>
		        </div>
	        </div>
		</div>
		</FadeTransform>
	);
}

export const Promotions = () => {
	return(
		<div className="promo-bg">
		<div className="container">
			<Carousel infiniteLoop>
			  	<div>
			  		<img className="img-fluid d-flex" src='./assets/images/buyonegetone.jpg' alt="" />
			  		<h2 className="mt-3">Buy 1 Get 1 Free Offer on our exclusive Brands in Men's Shirts</h2>
			  	</div>
			  	<div>
			  		<img src='./assets/images/sportshoes.jpg' alt="" />
			  		<h2 className="mt-3">Get into your Gyms with these cool sport shoes at discount prices</h2>
			  	</div>
			  	<div>
			  		<img src='./assets/images/newwomenfootwear.jpg' alt="" />
			  		<h2 className="mt-3">Step into these amazing new arrivals in women footwear</h2>
			  	</div>
			</Carousel>
		</div>
		</div>
	);
}

function Home(props) {
	return(
		<React.Fragment>
			<Jumbotron>
				<div className="container">
					<div className="row justify-content-center">
		                <div className="col-6 col-md-2">
		                    <img className="img-fluid jumbo-img" src="assets/images/manshop1.png" alt="" />
		                </div>
		                <div className="col-6 col-md-2">
		                    <img className="img-fluid jumbo-img" src="assets/images/womanshop1.png" alt="" />
		                </div>
		                <div className="col-12 col-md-4 mt-5">
		                    <h1 className="jumbo-text">Always in Style<br /><img src="assets/images/logo1.png" class="jumbo-logo mt-2" alt="" /></h1>
		                </div>  
		                <div className="d-none d-md-block col-md-2">
		                    <img className="img-fluid jumbo-img" src="assets/images/womanshop2.png" alt="" />
		                </div>
		                <div className="d-none d-md-block col-md-2">
		                    <img className="img-fluid jumbo-img" src="assets/images/manshop2.png" alt="" />
		                </div>
		            </div>
				</div>
			</Jumbotron>
			<Categories />
			<Promotions />
		</React.Fragment>
	);
}

export default Home;