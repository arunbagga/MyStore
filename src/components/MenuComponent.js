import React from 'react';
import { Categories, Promotions } from './HomeComponent';
const Menu = (props) => {

	return(
		<React.Fragment>
			<Categories />
			<Promotions />
		</React.Fragment>
	);
}
export default Menu;