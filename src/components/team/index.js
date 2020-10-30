import {useEffect} from 'react'

const Team = () => {

useEffect(() => {
    

   $('.team-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.team-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.team-slider',
    centerMode: true,
  arrows: false,
    focusOnSelect: true,
    responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
  });

$('.team-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,    
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
}, [])

return(
        <section class="team-slider-wrap sec-pad">
        <div class="container">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="text-content col-md-9 col-sm-9 col-xs-12 sec-h-pad-b no-h-padding">
              <h3 class="underlined-heading wow animated fadeInUp">We Are Great Team</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra vulputate tincidunt. Fusce ultricies dui pretium purus vestibulum suscipit. Proin ut turpis a mauris porttitor luctus eu quis velit. Nunc libero dolor, commodo sit amet nunc nec, sollicitudin semper ligula.</p>
            </div>
          </div>
          
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="slider team-slider-nav">
              <div class="team-photo">
                <img src="assets/images/team1.jpg"  alt=""/>
                <div class="overlay">
                  <div class="valign-wrap content">
                    <div class="valign-middle">
                      <div class="name"><h3>Jonathan Doe</h3></div>
                      <div class="position">CEO, Owner</div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="team-photo">
                <img src="assets/images/team2.jpg"  alt=""/>
                <div class="overlay">
                  <div class="valign-wrap content">
                    <div class="valign-middle">
                      <div class="name"><h3>Kim Jose</h3></div>
                      <div class="position">Diving Guide</div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="team-photo">
                <img src="assets/images/team3.jpg"  alt=""/>
                <div class="overlay">
                  <div class="valign-wrap content">
                    <div class="valign-middle">
                      <div class="name"><h3>Steve Webb</h3></div>
                      <div class="position">Travel Guide</div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="team-photo">
                <img src="assets/images/team4.jpg"  alt=""/>
                <div class="overlay">
                  <div class="valign-wrap content">
                    <div class="valign-middle">
                      <div class="name"><h3>Stephen Gerald</h3></div>
                      <div class="position">Snorkling Guide</div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="team-photo">
                <img src="assets/images/team5.jpg"  alt=""/>
                <div class="overlay">
                  <div class="valign-wrap content">
                    <div class="valign-middle">
                      <div class="name"><h3>Jessica Jean</h3></div>
                      <div class="position">Finance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider team-slider">
              <div class="slider-content">
                <div class="col-md-6 no-h-padding photo-section">
                  <img src="assets/images/team1-large.jpg"  alt=""/>
                </div>
                <div class="col-md-6 text-section no-h-padding">
                  <div class="title"><h3>Jonathan Doe</h3></div>
                  <div class="subtitle"><h4>CEO, Owner</h4></div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra vulputate tincidunt. Fusce ultricies dui pretium purus vestibulum suscipit. Proin ut turpis a mauris porttitor luctus eu quis velit. Nunc libero dolor, commodo sit amet nunc nec, sollicitudin semper ligula. consectetur adipiscing elit. Curabitur viverra vulputate tincidunt.</p>
                  </div>
                  <div class="socmed">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div> 
              <div class="slider-content">
                <div class="col-md-6 no-h-padding photo-section">
                  <img src="assets/images/team2-large.jpg"  alt=""/>
                </div>
                <div class="col-md-6 text-section no-h-padding">
                  <div class="title"><h3>Kim Jose</h3></div>
                  <div class="subtitle"><h4>Diving Guide</h4></div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra vulputate tincidunt. Fusce ultricies dui pretium purus vestibulum suscipit. Proin ut turpis a mauris porttitor luctus eu quis velit. Nunc libero dolor, commodo sit amet nunc nec, sollicitudin semper ligula. consectetur adipiscing elit. Curabitur viverra vulputate tincidunt.</p>
                  </div>
                  <div class="socmed">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div> 
              <div class="slider-content">
                <div class="col-md-6 no-h-padding photo-section">
                  <img src="assets/images/team3-large.jpg"  alt=""/>
                </div>
                <div class="col-md-6 text-section no-h-padding">
                  <div class="title"><h3>Steve Webb</h3></div>
                  <div class="subtitle"><h4>Travel Guide</h4></div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra vulputate tincidunt. Fusce ultricies dui pretium purus vestibulum suscipit. Proin ut turpis a mauris porttitor luctus eu quis velit. Nunc libero dolor, commodo sit amet nunc nec, sollicitudin semper ligula. consectetur adipiscing elit. Curabitur viverra vulputate tincidunt.</p>
                  </div>
                  <div class="socmed">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div> 
              <div class="slider-content">
                <div class="col-md-6 no-h-padding photo-section">
                  <img src="assets/images/team4-large.jpg"  alt=""/>
                </div>
                <div class="col-md-6 text-section no-h-padding">
                  <div class="title"><h3>Jessica Jean</h3></div>
                  <div class="subtitle"><h4>Finance</h4></div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra vulputate tincidunt. Fusce ultricies dui pretium purus vestibulum suscipit. Proin ut turpis a mauris porttitor luctus eu quis velit. Nunc libero dolor, commodo sit amet nunc nec, sollicitudin semper ligula. consectetur adipiscing elit. Curabitur viverra vulputate tincidunt.</p>
                  </div>
                  <div class="socmed">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div> 
              <div class="slider-content">
                <div class="col-md-6 no-h-padding photo-section">
                  <img src="assets/images/team5-large.jpg"  alt=""/>
                </div>
                <div class="col-md-6 text-section no-h-padding">
                  <div class="title"><h3>Steve Webb</h3></div>
                  <div class="subtitle"><h4>Travel Guide</h4></div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra vulputate tincidunt. Fusce ultricies dui pretium purus vestibulum suscipit. Proin ut turpis a mauris porttitor luctus eu quis velit. Nunc libero dolor, commodo sit amet nunc nec, sollicitudin semper ligula. consectetur adipiscing elit. Curabitur viverra vulputate tincidunt.</p>
                  </div>
                  <div class="socmed">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div> 
            </div> 
          </div>
        </div> 
      </section> 
  
)
}
export default Team;