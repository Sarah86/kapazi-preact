import { useEffect, useState } from 'react';

const Gallery = ({numberPictures, productName}) => {

	var galleryPics = [];
	for (var i = 0; i < numberPictures; i++) {
	galleryPics.push(`assets/images/${productName}_${i}.jpg`);
	};

	const pics = galleryPics.map((picAddress, i) => 
		<div class={`element-item masonry-item col-md-3 col-sm-6 col-xs-12 with-space ${productName}`} key={i}>
		<figure class="gallery-column margin-responsive">
			<img src={picAddress} alt={productName} />
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
    
    useEffect(() => {
			

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

		// -------------- Jquery Masonry Setting -------------- 

		var $mansorygrid = $('.masonry-grid');

		$mansorygrid.imagesLoaded( function() {
			$mansorygrid.masonry({
			itemSelector: '.masonry-item'
			});
		});

			// -------------- Lightbox -------------- 

  		$('.grouped-image-list a').vanillabox();

	}, [])
	

	return(
		<section class="gallery-list" style={{margin: '2em'}}>
		<div class="container no-h-padding">
			<div class="isotope-wrap masonry-grid grouped-image-list" >
				{pics}
			</div>		
		</div>
	  </section>
	)
}

export default Gallery;