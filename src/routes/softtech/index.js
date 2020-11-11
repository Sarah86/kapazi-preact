import BannerGallery from "../../components/bannergallery";
import Gallery from "../../components/gallery";

const Softtech = () => (
  <>
    <BannerGallery produto="Piso de EVA Soft Tech" descricao="" />
    <div class="container" style={{ marginTop: "2em" }}>
      <p>
        O piso de EVA SOFT TECH é um produto leve e macio com qualidade e
        acabamento Kapazi, o qual proporciona maior conforto ao caminhar sob o
        mesmo, e design diferenciado que permite diversas possibilidades de
        personalização. Tem características de isolamento acústico e resistência
        a impactos. Se diferencia no mercado pelo design, acabamento e curvas
      </p>
      <br />
      <ul>
        <li>Térmico</li>
        <li>Opções de design</li>
        <li>Possui tratamento antibactericida</li>
        <li>Antiderrapante</li>
        <li>Impermeável</li>
        <li>Baixa Manutenção</li>
        <li>Limpeza Simples</li>
        <li>Antichamas</li>
        <li>Macio e confortável</li>
        <li>Não acumula sujeira</li>
        <li>Fácil instalação</li>
        <li>Alta aderência</li>
      </ul>
    </div>
    <Gallery numberPictures="31" productName="soft-tech" />
  </>
);

export default Softtech;
