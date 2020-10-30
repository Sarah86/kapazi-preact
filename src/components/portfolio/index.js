import style from "./style.css"

const PortfolioItem = (props) => (
       <div class={style.portfolioitem}>
          <div class="no-h-padding">
          <div class="portfolio-item">
            <figure class="portfolio-figure">
              <img src={props.image} alt={props.titulo}/>
              <figcaption>
                <div class="valign-wrap fullwidth fullheight">
                  <div class="caption-wrap valign-middle">
                    <h2>{props.titulo}</h2>
                    <a href={props.link} class="def-btn btn-outline portfolio-btn">
                      <span class="text-content">
                      Mais Detalhes <i class="pe-7s-angle-right-circle"></i></span>
                    </a>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
       </div>
)

const Portfolio = () => (
    <section class="portfolio-collase sec-pad no-b-padding">
      <div class="container-fluid no-h-padding">
      <div class={style.portfolio}>
      <PortfolioItem 
        image="assets/images/thermo-deck_37.jpg" 
        titulo="Piso Thermo Deck" 
        link="/thermodeck"/>
        <PortfolioItem 
        image="assets/images/soft-tech_31.jpg" 
        titulo="Piso EVA Soft Tech" 
        link="/softtech"/>
        <PortfolioItem 
        image="assets/images/tapete-trancado_1.jpg" 
        titulo="Carpete Náutico Trançado" 
        link="/nauticotrancado"/>
        <PortfolioItem 
        image="assets/images/vinilkap_thumb.jpg" 
        titulo="Tapete Vinílico Vinil Kap" 
        link="/vinilkap"/>
        <PortfolioItem 
        image="assets/images/nauticlean_thumb.jpg" 
        titulo="Carpete Náutico Nauti Clean" 
        link="/nauticlean"/>
      </div>
      </div>
    </section>
)

export default Portfolio;