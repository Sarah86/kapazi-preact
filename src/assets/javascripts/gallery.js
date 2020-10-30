    
    function picGallery(numberPictures, productName){        
    var galleryPics = [];
    for (var i = 0; i < numberPictures; i++) {
    galleryPics.push(`assets/images/${productName}_${i}.jpg`);
    }
    var gallerylist = document.querySelector('.gallery-list .isotope-wrap.masonry-grid.grouped-image-list');
    galleryPics.forEach(picAddress => {
      var pic = document.createElement('div');
      pic.classList.add("element-item", "masonry-item", "col-md-3", "col-sm-6", "col-xs-12", "with-space", `${productName}`);
      pic.innerHTML = `
        <figure class="gallery-column margin-responsive">
          <img src="${picAddress}" alt="">
          <figcaption>
            <div class="valign-wrap fullwidth fullheight">
              <div class="caption-wrap valign-middle">
                <a href="${picAddress}" class="no-effect" data-lightbox="thermodeck"><i class="pe-7s-search pe-2x"></i></a>
              </div>
            </div>
          </figcaption>
        </figure>
      `;
      gallerylist.appendChild(pic);
    });
  }