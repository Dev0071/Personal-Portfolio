import React from 'react';
import CV from '../../assets/JohnGacheru.pdf';

function Cta() {
	return (
		<div className='cta'>
			<a
				href={CV}
				download
				className='btn'
			>
				Download cv
			</a>
			<a
				href='#Contact'
				className='btn btn-primary'
			>
				Let's Talk
			</a>
		</div>
	);
}

export default Cta;
