import BannerGallery from '../../components/bannergallery';
import Gallery from '../../components/gallery';


const Thermodeck = () => (
	<>
	<BannerGallery produto="Thermo Deck" descricao="O piso THERMO DECK é uma verdadeira evolução em revestimentos náuticos e precisa fazer parte da sua experiência de navegação."/>
	<div class="container" style={{marginTop: '2em'}}>
		<p>
		O piso THERMO DECK é um produto 100% PVC que chegou ao mercado náutico unindo decoração, proteção e diversas possibilidades de personalização. Sendo um piso náutico com aparência e característica de madeira Teka, é conhecido como TEKA SINTÉTICA, ela possui friso com perfeito acabamento o que permite diversificação nos layouts do revestimento da embarcação. Um produto que se diferencia do mercado pela sua sofisticação, elegância, características térmicas, acabamento e proteção. Com a vantagem de ser sob medida, o piso acompanha a fita autocolante (dupla face) de alta performance e com garantia de 2 anos seguindo as instruções de uso. Além de ser antiderrapante, uma de sua principal vantagem é a durabilidade, o qual permite anos de vida útil e um simples processo de lixamento realça seu aspecto de novo, além de contar com exclusivo tratamento bactericida Kher.
		</p>
	</div>
	<Gallery numberPictures="47" productName="thermo-deck"/>
	</>
)

export default Thermodeck;
