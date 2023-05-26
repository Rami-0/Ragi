import { Link } from 'react-router-dom';
import css from './Card.module.css';
const Card = ({ img, title, description, link }) => {
	return (
		<div className={css.wrapper} onClick={() => window.open(link.toString())}>
			<div className={css.imgWrapper}>
				<img src={img} alt='post' />
			</div>
			<div className={css.textWrapper}>
				<h1>{title}</h1>
				{console.log(title)}
				<p>{description}</p>
				<Link to={link} target='_blank' className={css.button}>
					<svg width='22' height='23' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M19.25 11.4082L14.4375 6.5957L13.4654 7.56783L16.6183 10.7207H2.75V12.0957H16.6183L13.4654 15.2486L14.4375 16.2207L19.25 11.4082Z' fill='#000' />
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default Card;
