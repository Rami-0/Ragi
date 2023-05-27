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

const Cooperations_arr = [Iktva, Amwal, Wadisafar, KFB, Li_tadom, Arzag, Bsatt, Huge, SBCandStv, Sportforal, mzg, ultra];

const settings = {
	rows: 2,
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: false,
	speed: 3000,
	autoplaySpeed: 3000,
	pauseOnHover: true,
	cssEase: 'linear',
	swipeToSlide: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
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
				autoplay: true,
				rows: 1,
				speed: 300,
				autoplaySpeed: 1300,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 2,
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
						<div className={css.logo + ' reveal'}>
							<img src={e} alt='logo' />
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Cooperation;
