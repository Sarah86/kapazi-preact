import BannerGallery from '../../components/bannergallery';
import Gallery from '../../components/gallery';


const Nauticotrancado = () => (
	<>
	<BannerGallery produto="Tapete Náutico Trançado" descricao=""/>
	<div class="container" style={{marginTop: '2em'}}>
	<p>
	O <b>TAPETE NÁUTICO TRANÇADO</b>alia sofisticação,
maciez e elegância em um único produto e não é
necessário colar na superfície da embarcação. É ideal
para áreas internas, porém permite aplicação nos
ambientes externos mediante a fixação com ilhós. Destaca-se
por ser um produto com requinte e acabamento com bordas em
viés que acompanham perfeitamente as curvas do barco dando
mais conforto e segurança na embarcação.

	</p>

	</div>
	<Gallery numberPictures="20" productName="tapete-trancado"/>
	</>
)

export default Nauticotrancado;
