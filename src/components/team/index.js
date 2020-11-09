import {useEffect} from 'react'

const teampeople = [
    {
        name: "Piso Thermo Deck",
        pic: "assets/images/thermodeck-thumb-team-detail-2.png",
        largepic: "assets/images/thermo-deck_31.jpg",
        position: "Uma Verdadeira Evolução Em Revestimentos Náuticos",
        description: "O piso <b>THERMO DECK</b> é um produto 100% PVC que chegou ao mercado náutico unindo decoração, proteção e diversas possibilidades de personalização. Sendo um piso náutico com aparência e característica de madeira Teka, é conhecido como TEKA SINTÉTICA, ela possui friso com perfeito acabamento o que permite diversificação nos layouts do revestimento da embarcação. Um produto que se diferencia do mercado pela sua sofisticação, elegância, características térmicas, acabamento e proteção. Com a vantagem de ser sob medida, o piso acompanha a fita autocolante (dupla face) de alta performance e com garantia de 2 anos seguindo as instruções de uso. Além de ser antiderrapante, uma de sua principal vantagem é a durabilidade, o qual permite anos de vida útil e um simples processo de lixamento realça seu aspecto de novo, além de contar com exclusivo tratamento bactericida Kher.",
        link: "/thermodeck"
    },  
    {
        name: "Piso EVA Soft Tech",
        pic: "assets/images/softdeck-thumb-team-detail.png",
        largepic: "assets/images/soft-tech_15.jpg",
        position: "Produto leve e macio com qualidade e acabamento Kapazi",
        description: "O piso de EVA SOFT TECH é um produto leve e macio com qualidade e acabamento Kapazi, o qual proporciona maior conforto ao caminhar sob o mesmo, e design diferenciado que permite diversas possibilidades de personalização. Tem características de isolamento acústico e resistência a impactos. Se diferencia no mercado pelo design, acabamento e curvas",
        link: "/softtech"
    },
    {
        name: "Carpete Náutico Trançado",
        pic: "assets/images/trancado-thumb-team-detail.png",
        largepic: "assets/images/trancado-thumb-team.png",
        position: " Sofisticação, maciez e elegância em um único produto",
        description: "descricao longa",
        link: "/nauticotrancado"
    },
    {
        name: "Tapete Vinílico Vinil Kap",
        pic: "assets/images/vinilkap-thumb-detail.png",
        largepic: "assets/images/vinilkap_4.jpg",
        position: "Snorkling Guide",
        description: "descricao longa",
        link: "/vinilkap"

    },
    {
        name: "Tapete Náutico Nauti Clean",
        pic: "assets/images/nauticlean-thumb-team-detail.png",
        largepic: "assets/images/team5-large.jpg",
        position: "Áreas internas com imagens sofisticadas e personalizações.",
        description: "descricao longa",
        link: "/nauticlean"
    }
]

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
                <div class="slider team-slider-nav">
                {
                    teampeople.map((people) => (
                    <div class="team-photo">
                    <img src={people.pic}  alt={people.name}/>
                    <div class="overlay">
                        <div class="valign-wrap content">
                        <div class="valign-middle">
                            <div class="name"><h3>{people.name}</h3></div>
                            <div class="position">{people.position}</div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
                }
                </div>   
                <div class="slider team-slider">
                {
                    teampeople.map((people) => (
                    <div class="slider-content">
                        <div class="col-md-6 no-h-padding photo-section">
                        <img src={people.largepic}  alt={people.name}/>
                        </div>
                        <div class="col-md-6 text-section no-h-padding">
                        <div class="title"><h3>{people.name}</h3></div>
                        <div class="subtitle"><h4>{people.position}</h4></div>
                        <div class="description">
                            <p dangerouslySetInnerHTML={{__html:`${people.description}`}}/>
                        </div>
                        <a href={people.link} class="def-btn btn-outline portfolio-btn" style={{margin: '2em 0'}}>
                            <span class="text-content">
                            Mais Detalhes <i class="pe-7s-angle-right-circle"></i></span>
                        </a>
                        </div>
                    </div> 
                    
                ))
                }
                </div>
            </div>
        </div>
      </section> 
  
)
}
export default Team;