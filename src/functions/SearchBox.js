import React from 'react';

const SearchBox = ({ visibility, searchChange }) => {
	if (visibility) {
		return (
			<div className="menu__search">
				<input
					className="menu__search-input "
					type='search'
					placeholder='search'
					onChange={searchChange}
				/>
			</div>
		);
	} else {
		return '';
	}
}




export default SearchBox;
