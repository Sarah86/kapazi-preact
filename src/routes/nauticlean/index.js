import BannerGallery from "../../components/bannergallery";
import Gallery from "../../components/gallery";

const Nauticlean = () => (
  <>
    <BannerGallery produto="Tapete Náutico Nauti Clean" descricao="" />
    <div class="container" style={{ marginTop: "2em" }}>
      <p>
        O <b>TAPETE NÁUTICO NAUTI CLEAN</b> é um tapete em nylon com base em PVC
        desenvolvido para áreas internas que possibilita a inserção de imagens
        sofisticadas e personalizações. Disponível em 7 cores possui uma borda
        debrun que traz um acabamento perfeito ao produto. Não há necessidade de
        fixação, facilitando a manutenção e limpeza do ambiente.
      </p>
      <ul>
        <li>Solução Completa - Sob medida, entregue e instalado</li>
        <li>Possuí tratamento antibactericida</li>
        <li>Antiderrapante</li>
        <li>Baixa manutenção</li>
        <li>Limpeza simples</li>
        <li>Macio e confortável</li>
        <li>Com acabamento têxtil</li>
        <li>Não acumula sujeira</li>
        <li>Não há necessidade de instalação</li>
        <li>Alta aderência</li>
        <li>Não altera o casco da embarcação</li>
      </ul>
    </div>
    <Gallery numberPictures="4" productName="nauticlean" />
  </>
);

export default Nauticlean;
