const BannerGallery = ({produto, descricao}) => (
    <section class="section banner-small parallax-section valign-wrap" style="background: url('assets/images/banner-small-3.jpg'); background-size: cover;">
      <div class="overlay"></div>
      <div class="content-wrap valign-bottom">
        <div class="container">
          <div class="col-md-12">
            <div class="title wow animated fadeInUp"><h1>{produto}</h1></div>
            <div class="subtitle wow animated fadeIn"><h2>{descricao}</h2></div>            
          </div>
        </div>
      </div>
    </section>
);

export default BannerGallery;