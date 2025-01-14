import React from 'react';
import Lottie from 'react-lottie';
import pin from './pin.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: pin,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Lottie_Main = ({onClick}) => {
	return (
		<div className='pin__arrow' onClick={onClick}>
			<Lottie options={defaultOptions} height={80} width={80}/>
		</div>
	);
};

export default Lottie_Main;
