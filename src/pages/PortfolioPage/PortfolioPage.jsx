import css from './PortfolioPage.module.css';
import Card from './../../components/Card/Card';
import Contacts from './../../components/contacts/Contacts';
import { myProjects2 } from '../../constants/Projects';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Lottie_Main from './../../components/lottie/Lottie_Main';
import Logo2 from '../../assets/img/Animation.gif';
import Cooperation from './../../components/cooperation/Cooperation';
import { reveal } from '../../animation';

const PortfolioPage = () => {
	return (
		<>
			<main id='Home' className={css.main}>
				<div className={css.logoDiv}>
					<img src={Logo2} alt='logo' className={css.mainLogo + ' hover'} />
				</div>

				<AnchorLink offset='20px' href='#header'>
					<Lottie_Main />
				</AnchorLink>
			</main>
			<header id='header'></header>
			<Cooperation />
			<br />
			<br />
			<br />
			<p className={css.sectionLable + ' containerPadded'}>Portfolio</p>
			<section id='portfolio' className={css.section + ' container'}>
				<div className={css.cards + ' containerPadded'}>
					{myProjects2.map((elem) => {
						return <Card key={elem.id} img={elem.img} title={elem.name} description={elem.description} link={elem.link} video={elem.video} />;
					})}
				</div>
				<section className={css.Contacts}>
					<Contacts />
				</section>
			</section>
		</>
	);
};

export default PortfolioPage;
