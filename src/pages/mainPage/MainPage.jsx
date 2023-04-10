import css from "./MainPage.module.css";
import logo from "../../assets/img/Logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Card from "./../../components/Card/Card";
import img from "../../assets/img/Screenshot 2023-04-05 012442.png";
import { reveal } from "../../animation";
import AnimateHarmony from "../../assets/img/Projects/AnimteHarmony.png";
import LogoAnimation from "../../assets/img/Projects/LogoAnimation.png";
import korean from "../../assets/img/Projects/korean.png";
import masari from "../../assets/img/Projects/masari.jpg";
import seedAndSteam from "../../assets/img/Projects/seedAndSteam.png";
import tagPluse from "../../assets/img/Projects/tagPlus.png";
import Contacts from "./../../components/contacts/Contacts";

const myProjects = [
	{
		name: "TagPlus",
		img: tagPluse,
		id: 1,
		boolean: false,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore recusandae accusantium, saepe totam vel.",
		link: "https://www.behance.net/gallery/146353781/TagPlus-Motion-Graphic",
	},
	{
		name: "korean",
		img: korean,
		id: 2,
		boolean: false,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore recusandae accusantium, saepe totam vel.",
		link: "https://www.behance.net/gallery/145216681/Korean-shed-Motion-Design",
	},
	{
		name: "masari",
		img: masari,
		id: 3,
		boolean: false,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore recusandae accusantium, saepe totam vel.",
		link: "https://www.behance.net/gallery/145477191/Motion-Explainer-Video-Masari-",
	},
	{
		name: "LogoAnimation",
		img: LogoAnimation,
		id: 4,
		boolean: false,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore recusandae accusantium, saepe totam vel.",
		link: "https://www.behance.net/gallery/146381363/Logo-Animation-V1",
	},
	{
		name: "AnimateHarmony",
		img: AnimateHarmony,
		id: 6,
		boolean: false,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore recusandae accusantium, saepe totam vel.",
		link: "https://www.behance.net/gallery/111114531/Animate-an-artwork-named-Harmony",
	},

	{
		name: "seedAndSteam",
		img: seedAndSteam,
		id: 5,
		boolean: false,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore recusandae accusantium, saepe totam vel.",
		link: "https://www.behance.net/gallery/121650789/Seed-and-Stem",
	},
];

const MainPage = () => {
	return (
		<>
			<main id="Home" className={css.main}>
				<div className={css.logoDiv}>
					<AnchorLink offset="20px" href="#portfolio">
						<img src={logo} alt="" className={css.mainLogo + " hover"} />
					</AnchorLink>
				</div>
			</main>

			<section id="portfolio" className={css.section + " container"}>
				<header className={css.header + " containerPadded reveal"}>
					<AnchorLink className={"hover"} href="#Home">
						Home
					</AnchorLink>
					<AnchorLink className={"hover"} offset="20px" href="#portfolio">
						Portfolio
					</AnchorLink>
					<AnchorLink className={"hover"} href="#">
						About Me
					</AnchorLink>
				</header>
				<p className={css.sectionLable + " containerPadded reveal"}>
					Portfolio
				</p>
				<div className={css.cards + " containerPadded reveal"}>
					{myProjects.map((elem) => {
						return (
							<Card
								key={elem.id}
								img={elem.img}
								title={elem.name}
								description={elem.description}
								link={elem.link}
							/>
						);
					})}
				</div>
				<section className={css.Contacts}>
					<Contacts />
				</section>
			</section>
		</>
	);
};

export default MainPage;
