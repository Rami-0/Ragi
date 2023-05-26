import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './Cooperation.module.css';
import { reveal } from '../../animation';

import Amwal from './assets/Amwal.svg';
import Arzag from './assets/Arzag.svg';
import Bsatt from './assets/Bsatt.svg';
import Huge from './assets/Huge.svg';
import Iktva from './assets/Iktva.svg';
import KFB from './assets/KFB.svg';
import Li_tadom from './assets/Li_tadom.svg';
import SBCandStv from './assets/SBCandStv.svg';
import Sportforal from './assets/Sportforal.svg';
import Wadisafar from './assets/Wadisafar.svg';
import mzg from './assets/mzg.svg';
import ultra from './assets/ultra.svg';

const Cooperations_arr = [Amwal, Arzag, Bsatt, Huge, Iktva, KFB, Li_tadom, SBCandStv, Sportforal, Wadisafar, mzg, ultra];

const settings = {
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 300,
	pauseOnHover: false,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const Cooperation = () => {
	return (
		<div className={css.SliderWrapper + ' containerPadded reveal'}>
			<h2 className='reveal'>Cooperation</h2>
			<Slider {...settings}>
				{Cooperations_arr.map((e) => {
					return (
						<div className={css.logo + " reveal"}>
							<img src={e} alt='logo' />
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Cooperation;
