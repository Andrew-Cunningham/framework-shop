import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import "./Landing.css";

import { addToCart } from "../../ducks/product";

import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";

export class Landing extends Component {
	render() {
		const products = this.props.featuredProducts.map( product => (
			<FeaturedProduct
				key={ product.id }
				addToCart={ () => this.props.addToCart( product.id ) }
				{ ...product }
			/>
		) );
		return (
			<main className="landing">
				<h1>Featured Products</h1>
				<div className="landing__products-wrapper">
					{ products }
				</div>

				<Link to="shop">
					<h1 className="landing__full-shop-link">Take me to the full shop!</h1>
				</Link>
			</main>
		);
	}
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
