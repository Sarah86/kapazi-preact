import BannerGallery from "../../components/bannergallery";
import Gallery from "../../components/gallery";

const Thermodeck = () => (
  <>
    <BannerGallery
      produto="Thermo Deck"
      descricao="O piso THERMO DECK é uma verdadeira evolução em revestimentos náuticos e precisa fazer parte da sua experiência de navegação."
    />
    <div class="container" style={{ marginTop: "2em" }}>
      <p>
        O piso <b>THERMO DECK</b> é um produto 100% PVC que chegou ao mercado náutico
        unindo decoração, proteção e diversas possibilidades de personalização.
        Sendo um piso náutico com aparência e característica de madeira Teka, é
        conhecido como TEKA SINTÉTICA, ela possui friso com perfeito acabamento
        o que permite diversificação nos layouts do revestimento da embarcação.
        Um produto que se diferencia do mercado pela sua sofisticação,
        elegância, características térmicas, acabamento e proteção. Com a
        vantagem de ser sob medida, o piso acompanha a fita autocolante (dupla
        face) de alta performance e com garantia de 2 anos seguindo as
        instruções de uso. Além de ser antiderrapante, uma de sua principal
        vantagem é a durabilidade, o qual permite anos de vida útil e um simples
        processo de lixamento realça seu aspecto de novo, além de contar com
        exclusivo tratamento bactericida Kher.
      </p>
	  <br/>
      <ul>
        <li>Melhor custo benefício</li>
        <li>Térmico</li>
        <li>Opções de design</li>
        <li>Ecologicamente correto</li>
        <li>Possui tratamento antibactericida</li>
        <li>Antiderrapante</li>
        <li>Alta Durabilidade</li>
        <li>Tecnologia de Ponta</li>
        <li>25% mais leve que a Teka natural</li>
        <li>Impermeável</li>
        <li>Desgaste mínimo</li>
        <li>Revitalizável</li>
        <li>Não lasca</li>
        <li>Não oxida</li>
        <li>Baixa manutenção</li>
        <li>Limpeza simples</li>
        <li>Antichamas</li>
      </ul>
    </div>
    <Gallery numberPictures="47" productName="thermo-deck" />
  </>
);

export default Thermodeck;
