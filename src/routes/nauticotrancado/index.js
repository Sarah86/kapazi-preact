import BannerGallery from "../../components/bannergallery";
import Gallery from "../../components/gallery";

const Nauticotrancado = () => (
  <>
    <BannerGallery produto="Tapete Náutico Trançado" descricao="" />
    <div class="container" style={{ marginTop: "2em" }}>
      <p>
        O <b>TAPETE NÁUTICO TRANÇADO</b> alia sofisticação, maciez e elegância
        em um único produto e não é necessário colar na superfície da
        embarcação. É ideal para áreas internas, porém permite aplicação nos
        ambientes externos mediante a fixação com ilhós. Destaca-se por ser um
        produto com requinte e acabamento com bordas em viés que acompanham
        perfeitamente as curvas do barco dando mais conforto e segurança na
        embarcação.
      </p>
      <br />
      <ul>
        <li>Possuí tratamento antibactericida</li>
        <li>Antiderrapante</li>
        <li>Baixa Manutenção</li>
        <li>Limpeza Simples</li>
        <li>Secagem rápida</li>
        <li>Antichamas</li>
        <li>Macio e confortável</li>
        <li>Não acumula sujeira</li>
        <li>Não há necessidade de instalação</li>
        <li>Alta aderência</li>
        <li>Não altera o casco da embarcação</li>
      </ul>
    </div>
    <Gallery numberPictures="20" productName="tapete-trancado" />
  </>
);

export default Nauticotrancado;
