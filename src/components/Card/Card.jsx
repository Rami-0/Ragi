import { Link } from "react-router-dom";
import css from "./Card.module.css";
const Card = ({ img, title, description, link }) => {
	return (
		<div className={css.wrapper}>
			<div className={css.imgWrapper}>
				<img src={img} alt="image" />
			</div>
			<div className={css.textWrapper}>
				<h1>{title}</h1>
				{console.log(title)}
				<p>{description}</p>
				<Link to={link} target="_blank"><p></p>/\</Link>
			</div>
		</div>
	);
};

export default Card;
