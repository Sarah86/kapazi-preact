import BannerGallery from '../../components/bannergallery';
import Gallery from '../../components/gallery';


const Softtech = () => (
	<>
	<BannerGallery produto="Piso de EVA Soft Tech" descricao=""/>
	<div class="container" style={{marginTop: '2em'}}>
	<p>
		O piso de EVA SOFT TECH é um produto leve e
	macio com qualidade e acabamento Kapazi, o qual
	proporciona maior conforto ao caminhar sob o mesmo,
	e design diferenciado que permite diversas possibilidades
	de personalização. Tem características de isolamento acústico
	e resistência a impactos. Se diferencia no mercado pelo design,
	acabamento e curvas

	</p>

	</div>
	<Gallery numberPictures="33" productName="soft-tech"/>
	</>
)

export default Softtech;
