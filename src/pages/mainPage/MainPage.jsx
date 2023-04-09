import css from "./MainPage.module.css";
import logo from "../../assets/img/Logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Card from './../../components/Card/Card';
import img from "../../assets/img/Screenshot 2023-04-05 012442.png"
import { reveal } from "../../animation";


const MainPage = () => {


	return (
		<>
			<main id="Home" className={css.main}>
				<div className={css.logoDiv}>
					<AnchorLink offset='20px' href="#portfolio">
						<img src={logo} alt="" className={css.mainLogo + " hover"} />
					</AnchorLink>
				</div>
			</main>
			
			<section id="portfolio" className={css.section + ' container'}>
				<header className={css.header + " containerPadded reveal" }>
					<AnchorLink className={"hover"} href="#Home">Home</AnchorLink>
					<AnchorLink className={"hover"} offset='20px' href="#portfolio">Portfolio</AnchorLink>
					<AnchorLink className={"hover"} href="#">About Me</AnchorLink>
					<AnchorLink className={"hover"} href="#">contacts</AnchorLink>
				</header>
				<p className={css.sectionLable + " containerPadded reveal"}>Portfolio</p>
				<div className={css.cards + " containerPadded reveal"}>
					<Card img={img} title={"title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis?"}/>
					<Card img={img} title={"title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis?"}/>
					<Card img={img} title={"title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis?"}/>
					<Card img={img} title={"title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis?"}/>
					<Card img={img} title={"title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis?"}/>
					<Card img={img} title={"title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis?"}/>
				</div>
			</section>
		</>
	);
};

export default MainPage;
