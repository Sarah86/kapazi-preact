import {useEffect} from 'react';

const Gallery = ({numberPictures, productName}) => {

	var galleryPics = [];

	for (var i = 0; i < numberPictures; i++) {
	galleryPics.push(`assets/images/${productName}_${i}.jpg`);
    };
    
    useEffect(() => {
		
		$('.gallery-carousel').slick({
			centerMode: true,
			slidesToShow: 3,
			focusOnSelect: true,
			responsive: [
			  {
				breakpoint: 768,
				settings: {
				  arrows: false,
				  centerMode: true,
				  centerPadding: '40px',
				  slidesToShow: 3
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  arrows: false,
				  centerMode: true,
				  centerPadding: '40px',
				  slidesToShow: 1
				}
			  }
			]
		  });
        
  // -------------- Jquery Masonry Setting -------------- 

    var $container = $('.masonry-grid');

    $container.imagesLoaded( function() {
        $container.masonry({
        itemSelector: '.masonry-item'
        });
    });

    // -------------- Jquery Isotope Setting -------------- 

    var $container = $('.isotope-wrap');
    $container.isotope({
        filter: '*',
        itemSelector: '.element-item',
        animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
        }
    });

    }, [])

	return(
		<section class="gallery-list" style={{margin: '2em'}}>
		<div class="container no-h-padding">
			<div class="isotope-wrap masonry-grid grouped-image-list">
			{
				galleryPics.map((picAddress, i) => 
				<div class={`element-item masonry-item col-md-3 col-sm-6 col-xs-12 with-space ${productName}`} key={i}>
				<figure class="gallery-column margin-responsive">
				<img src={picAddress} alt=""/>
					<figcaption>
					<div class="valign-wrap fullwidth fullheight">
						<div class="caption-wrap valign-middle">
						<a href={picAddress} class="no-effect" data-lightbox={productName}><i class="pe-7s-search pe-2x"></i></a>
						</div>
					</div>
					</figcaption>
				</figure>
			</div>
				)
			}
			</div>		
		</div>
	  </section>
	)
}

export default Gallery;