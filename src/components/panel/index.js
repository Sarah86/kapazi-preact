import { h } from 'preact';
import { Link } from 'preact-router/match';

const TabPane = (props) => (
  <div class={`tab-pane fade in ${props.active}`} id={props.id}>
  <div class="col-md-5 no-h-padding">
    <div class="image">
      <img src={props.image} alt=""/>
    </div>
  </div>
  <div class="col-md-7">
    <div class="description">
      <div class="title">
        <h4 class="underlined-heading">{props.title}
        </h4>
      </div>
      <div class="content">
        <p>{props.content}
          </p>
      </div>
    </div>
  </div>
</div>
)

const Panel = () => (
    <section class="feature-panel-wrap sec-pad">
      <div class="container">
        <div class="feature-panel panel with-nav-tabs">
          <div class="panel-body">
            <div class="tab-content">
            <TabPane
              active="active"
              id="tabfeature1"
              image="assets/images/feature-panel1.jpg"
              title="Personalizado"
              content="Os pisos náuticos personalizados foram criados para suprir uma necessidade do mercado que busca sempre inovação e personalização. Produzimos com alta tecnologia de impressão todos tapetes náuticos Kapazi, o qual possuem diferentes opções de inserção das mais diversas e sofisticadas imagens diretamente no THERMO DECK BEACH, THERMO DECK BEACH COMFORT, THERMO DECK CLASSIC, SOFT TECH ou VINILKAP."/>
               <TabPane
              id="tabfeature2"
              image="assets/images/feature-panel2.jpg"
              title="Sob Medida & Molde"
              content="A Kapazi têm soluções em revestimentos náuticos desde a sua produção até a instalação, uma fase muito importante pra quem quer revestir sua embarcação, é tirar o MOLDE. A Kapazi produz o piso SOB MEDIDA, de acordo com a modelagem do barco. Dessa forma, é muito importante começar pela tiragem do molde do barco antes de mandar para produção."/>
                <TabPane
              id="tabfeature3"
              image="assets/images/feature-panel3.jpg"
              title="Suporte Técnico"
              content="A Kapazi está sempre pensando em oferecer a solução completa para seus clientes. Diante disso, além de oferecer produtos de altíssima qualidade, personalizar e fazer o piso do seu barco sob medida, instalamos ou indicamos profissionais treinados que atuam na região onde encontra-se o barco, realizando assim o revestimento da embarcação."/>

            </div>
          </div>

          <div class="panel-heading">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#tabfeature1" data-toggle="tab" class="no-effect">
                  <i class="pe-7s-config"></i>
                </a>
              </li>
              <li>
                <a href="#tabfeature2" data-toggle="tab" class="no-effect">
                  <i class="pe-7s-tools"></i>
                </a>
              </li>
              <li>
                <a href="#tabfeature3" data-toggle="tab" class="no-effect">
                  <i class="pe-7s-anchor"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
);

export default Panel;
