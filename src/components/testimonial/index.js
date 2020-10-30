import {useEffect} from 'react'

const TestimonialContent = (props) => (
    <div class="testimonial-content">
      <div class="text">
        <div class="quote">
          <img src="assets/images/quote.png" alt={props.name}/>
        </div>
        {props.testimonial}
      </div>
      <div class="image-name-wrap valign-wrap">
        <div class="image valign-middle">
          <img src={props.image} alt={props.name + "-" + props.position} class="img-circle"/>
        </div>
        <div class="name-position valign-middle">
          <div class="name">{props.name}</div>
          <div class="position">{props.position}</div>
        </div>
      </div>
    </div>
)

const Testimonial = () => {

  useEffect(() => {
    
	$('.testimonial-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
    arrows: false,
    dots: true,
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
    <section class="testimonial sec-pad">
        <div class="container">
          <div class="text-content col-md-9 col-sm-9 col-xs-12">
            <h3 class="underlined-heading wow animated fadeInUp">Depoimentos</h3>
            <p>Conheça algumas opiniões sobre os nossos serviços</p>
          </div>
  
          <div class="testimonial-slider wow animated fadeIn">
            <TestimonialContent
                name="Pessoa"
                position="Professor"
                testimonial="Adoro a Kapazi"
                image="assets/images/person1.jpg"
                />
            <TestimonialContent
              name="Pessoa"
              position="Professor"
              testimonial="Adoro a Kapazi"
              image="assets/images/person1.jpg"
              />
            <TestimonialContent
              name="Pessoa"
              position="Professor"
              testimonial="Adoro a Kapazi"
              image="assets/images/person1.jpg"
              />
            <TestimonialContent
              name="Pessoa"
              position="Professor"
              testimonial="Adoro a Kapazi"
              image="assets/images/person1.jpg"
              />       
          </div>
        </div>
      </section> 
  )
        
  }

export default Testimonial;