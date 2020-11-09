import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';



const BannerItem = (props) => (
  <div class={`item parallax-section ${props.active}`} 
       style={{'background-image': `url(${props.image})`, 'background-size':'cover'}}>
  <div class="overlay"></div>
  <div class="container nopadding">
    <div class="content-wrap valign-wrap">
      <div class="content valign-middle col-md-6">
        <div class="text-content">
          <div class="underlined-heading top animated fadeInLeft wow" data-wow-delay="0.5s">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
          </div>
          <div class="banner-description animated fadeIn wow" data-wow-delay="1.5s">
            <h3>{props.description}</h3>
          </div>
          <div class="button-wrap animated fadeIn wow" data-wow-delay="2s">
            <a href={props.link} class="def-btn btn-outline">{props.button}</a>
          </div>
        </div> 
      </div>
      <div class="content valign-bottom col-md-6">
        <div class="image-content">
          <div class="image animated fadeIn wow" data-wow-delay="1s">
            <img src={props.product} class={style.carousel_img} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>
)

const Banner = () => (
  // Banner Begin 
  <section class="banner carousel slide" id="banner-carousel">
  <div class="carousel-inner">

  <BannerItem 
    title="O melhor piso náutico do mundo"
    subtitle="Thermo Deck"
    description="O piso THERMO DECK é uma verdadeira evolução em revestimentos náuticos e precisa fazer parte da sua experiência de navegação."
    button="Saiba Mais"
    image="assets/images/banner1.jpg"
    active="active"
    product="assets/images/thermodeck_banner-1.jpg"
    link="/thermodeck"
    />

   <BannerItem 
    title="Piso de EVA"
    subtitle="Soft Teck"
    description="Conforto e design."
    button="Saiba Mais"
    image="assets/images/banner1.jpg"
    product="assets/images/softech_banner-0.jpg"
    link="/softtech"
    />

    <BannerItem 
        title="Carpete Náutico"
        subtitle="Trançado"
        description="Sofisticação, maciez e elegância."
        button="Saiba Mais"
        image="assets/images/banner1.jpg"
        product="assets/images/trancado_banner-2.jpg"
        link="/nauticotrancado"
        />

    <BannerItem 
        title="Tapete Vinílico"
        subtitle="Vinil Kap"
        description="Conforto e beleza para embarcações."
        button="Saiba Mais"
        image="assets/images/banner1.jpg"
        product="assets/images/vinilkap_banner-0.jpg"
        link="/vinilkap"
        />

    <BannerItem 
        title="Tapete Náutico"
        subtitle="Nauti Clean"
        description="Áreas internas com imagens sofisticadas e personalizações."
        button="Saiba Mais"
        image="assets/images/banner1.jpg"
        product="assets/images/nauticlean_banner-0.jpg"
        link="/nauticlean"
        />

  </div> 
 
  <a class="left carousel-control" href="#banner-carousel" role="button" data-slide="prev" style={style}>
    <div class="control left">
      <div class="shape"><i class="fa fa-angle-left"></i></div>
    </div>
  </a>
  <a class="right carousel-control" href="#banner-carousel" role="button" data-slide="next">
    <div class="control right">
      <div class="shape"><i class="fa fa-angle-right"></i></div>
    </div>
  </a>

  <div class="scroll-info">
    <a href="#home-nav">
      <div class="shape">
        <i class="fa fa-angle-down"></i>
      </div>
    </a>
  </div>

</section> 
);

export default Banner;
