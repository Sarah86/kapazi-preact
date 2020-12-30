import style from "./style.css"

const WhoItem = (props) => (
  <div class="icon-list col-md-6 col-sm-6">
      <div class="icon text-center"><i class={props.icon}></i></div>
      <div class="icon-text">
        <div class="top-text">{props.Toptext}</div>
        <div class="bottom-text">{props.bottomText}</div>
      </div>
  </div>
)

const Who = () => (
    <section class="who-we-are">
      <div class="image-bg" style="background: url('assets/images/karol-ayres.jpeg') top no-repeat; background-size: cover;">
      <div class={style.imageTitle}>A Kapazi Náutica Por Aí</div>
      </div>
      <div class="container">
        <div class="valign-wrap">
          <div class="col-md-6 col-sm-6 valign-middle image-content no-h-padding">
          </div>
          <div class="col-md-6 col-sm-6 valign-middle text-content">
            <div class="title">
              <h3 class="underlined-heading wow animated fadeInUp">Sobre Nós</h3>
            </div>
            <div class="text wow animated fadeIn"><p>A Kapazi Nautica Por aí é representante oficial da Kapazi Náutica. Somos Karol Kapazi e Ayres Coelho. Moramos a bordo de um Veleiro, e estamos por aí, em todos os lugares. ⛵️</p></div>
            <div class="icon-list-wrap">
              <div class="row"> 
                <div class="icon-list col">
                  <div class="icon text-center"><i class="pe-7s-map-2"></i></div>
                  <div class="icon-text">
                    <div class="top-text">Vamos até você e sua embarcação,</div>
                    <div class="bottom-text">para fazer orçamento e levar amostras dos produtos </div>
                  </div>
                </div>
                <div class="icon-list col">
                  <div class="icon text-center"><i class="pe-7s-light"></i></div>
                  <div class="icon-text">
                    <div class="top-text">Somos apaixonados pelo Mar e nossa equipe está preparada para lhe apresentar</div>
                    <div class="bottom-text"> a melhor solução em pisos.</div>
                  </div>
                </div>
                <div class="icon-list col">
                  <div class="icon text-center"><i class="pe-7s-medal"></i></div>
                  <div class="icon-text">
                    <div class="top-text"> A Kapazi é líder de mercado, no Brasil, no segmento de</div>
                    <div class="bottom-text">pisos náuticos, tapetes náuticos, revestimentos náuticos e acessórios. Temos várias soluções para a sua embarcação.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)

export default Who;