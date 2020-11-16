import { h } from 'preact';
import Banner from '../../components/banner';
import Panel from '../../components/panel';
import Who from '../../components/who';
import TitleParagraph from '../../components/titleparagraph';
import Portfolio from '../../components/portfolio';
import style from './style.css';
import Testimonial from '../../components/testimonial';
import Instagram from '../../components/instagram';
import Team from '../../components/team';
import Contato from '../../components/contato';

const Home = () => (
	<div class={style.home}>
		<Banner/>
		<Panel/>
		<TitleParagraph/>
		<Team/>
		<Who/>
		<Contato/>
		<Instagram/>
	</div>
);

export default Home;
