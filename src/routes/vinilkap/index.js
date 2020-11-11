import BannerGallery from "../../components/bannergallery";
import Gallery from "../../components/gallery";

const Vinilkap = () => (
  <>
    <BannerGallery produto="Tapete Vinílico Vinil Kap" descricao="" />
    <div class="container" style={{ marginTop: "2em" }}>
      <p>
        É um produto com mais de 25 anos no mercado proporcionando mais conforto
        e beleza para embarcações, pois possui uma vasta variedade de cores e
        opções de combinação de borda e personalização, que aliado com a alta
        qualidade, resistência e acabamento do <b>TAPETE VINÍLICO VINIL KAP</b> fazem
        com que seja uma opção prática, versátil com ótimo custo benefício para
        embarcações.
      </p>
      <br />
      <ul>
        <li>Antiderrapante</li>
        <li>Baixa manutenção</li>
        <li>Limpeza simples</li>
        <li>Possuí tratamento antibactericida</li>
        <li>Não há necessidade de instalação</li>
        <li>Isolante acústico</li>
        <li>Várias opções de utilização</li>
        <li>Variedade de cores</li>
        <li>Alta Aderência</li>
        <li>Não altera o casco da embarcação</li>
      </ul>
    </div>
    <Gallery numberPictures="7" productName="vinilkap" />
  </>
);

export default Vinilkap;
