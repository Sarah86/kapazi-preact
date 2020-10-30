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
            <img src={props.product} alt=""/>
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
    product="assets/images/banner-decoration1.png"
    link="/thermodeck"
    />

   <BannerItem 
    title="Piso de EVA"
    subtitle="Soft Teck"
    description="O piso THERMO DECK BEACH é uma verdadeira evolução em revestimentos náuticos e precisa fazer parte da sua experiência de navegação."
    button="Saiba Mais"
    image="assets/images/banner1.jpg"
    product="assets/images/banner-decoration1.png"
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
