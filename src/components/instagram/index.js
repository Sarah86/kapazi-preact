import {useEffect} from 'react'
import style from "./style.css"

const Instagram = () => {

  useEffect(() => {
    (function(){
      new InstagramFeed({
          'username': 'kapazinauticaporai',
          'container': document.getElementById("instagram-feed1"),
          'display_profile': true,
          'display_biography': false,
          'display_gallery': true,
          'callback': null,
          'styling': true,
          'items': 8,
          'items_per_row': 4,
          'margin': 0.25,
          'lazy_load': true,
          'on_error': console.error
      });
    })();  
  }, [])

  return(
    <section class="gallery-carousel-wrap sec-pad">
    <div class="container">
      <div class="title">
        <h3 class="underlined-heading wow animated fadeInUp">Nossas últimas fotos</h3>
        <p>Siga-nos no Instagram</p>
      </div>

      <div id="instagram-feed1" class={style.instagramfeed}></div>

    </div>
  </section>
  )
}


export default Instagram