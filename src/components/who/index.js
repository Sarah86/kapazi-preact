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
      <div class="image-bg" style="background: url('assets/images/karol-ayres-2.jpeg') top no-repeat; background-size: cover;">
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
            <div class="text wow animated fadeIn"><p>Por aí... em todos os lugares</p></div>
            <div class="icon-list-wrap">
              <div class="row"> 
              <WhoItem 
                icon="pe-7s-anchor"
                Toptext="Temos o"
                bottomText="Melhor Time"/>
                <div class="icon-list col-md-6 col-sm-6">
                  <div class="icon text-center"><i class="pe-7s-compass"></i></div>
                  <div class="icon-text">
                    <div class="top-text">Our Team Is</div>
                    <div class="bottom-text">Best Hikers</div>
                  </div>
                </div>
                <div class="icon-list col-md-6 col-sm-6">
                  <div class="icon text-center"><i class="pe-7s-plane"></i></div>
                  <div class="icon-text">
                    <div class="top-text">We Are</div>
                    <div class="bottom-text">Great Traveler</div>
                  </div>
                </div>
                <div class="icon-list col-md-6 col-sm-6">
                  <div class="icon text-center"><i class="pe-7s-way"></i></div>
                  <div class="icon-text">
                    <div class="top-text">Our Team Is</div>
                    <div class="bottom-text">Best Explorer</div>
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