const Contato = () => {
  return (
    <>
      <section class="contact-title-paragraph sec-pad-t sec-h-pad-b">
        <div class="container">
          <div class="iconic-title text-center col-md-12 no-h-padding no-h-padding wow animated fadeInUp">
            <div class="col-md-12 no-h-padding">
              <div class="title-icon">
                <span>
                  <i class="pe-7s-call pe-2x"></i>
                </span>
              </div>
            </div>
            <div class="col-md-12 no-h-padding">
              <h1>Contato</h1>
            </div>
          </div>

          <div class="col-md-8 col-md-offset-2 text-center sec-h-pad sec-q-pad-t wow animated fadeIn">
            <p>
              Estamos preparados para te atender e oferencer as melhores
              soluções em pisos náuticos.
            </p>
          </div>
        </div>
      </section>

      <section class="contact-columns sec-pad-b">
        <div class="container">
          <div class="col-md-4 col-sm-4 column margin-responsive">
            <div class="iconic-title-alt wow animated fadeIn">
              <div class="title-icon-wrap text-center col-md-12 no-h-padding mar-b-20">
                <div class="title-icon">
                  <i class="pe-7s-map-marker pe-2x pe-va"></i>
                </div>
              </div>

              <h2 class="underlined-heading mar-t-10 font-russoone font-weight-light">Visite-nos</h2>
            </div>
            <p class="text-center">
              <a href="https://goo.gl/maps/TBp7nLQMBkexgtYD9">
                AV ENGENHEIRO WINSTON MARUCA, 10 - LJ 14 - ANGRA DOS REIS - RJ
              </a>
            </p>
          </div>

          <div class="col-md-4 col-sm-4 column margin-responsive">
            <div class="iconic-title-alt wow animated fadeIn">
              <div class="title-icon-wrap text-center col-md-12 no-h-padding mar-b-20">
                <div class="title-icon">
                  <i class="pe-7s-phone pe-2x pe-va"></i>
                </div>
              </div>

              <h2 class="underlined-heading mar-t-10 font-russoone font-weight-light">Entre em contato</h2>
            </div>
            <p class="text-center">
              <a href="tel:+5524998648221">(24) 99864-8221 - 𝗥𝗝</a>
              <br />
              <a href="tel:+5511941779925">(11) 94177-9925 - 𝗦𝗣</a>
            </p>
          </div>

          <div class="col-md-4 col-sm-4 column margin-responsive">
            <div class="iconic-title-alt wow animated fadeIn">
              <div class="title-icon-wrap text-center col-md-12 no-h-padding mar-b-20">
                <div class="title-icon">
                  <i class="pe-7s-mail pe-2x pe-va"></i>
                </div>
              </div>

              <h2 class="underlined-heading mar-t-10 font-russoone font-weight-light">E-mail</h2>
            </div>
            <p class="text-center">
              <a href="mailto:kapazirio@gmail.com">kapazirio@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
      <section class="bottom-contact-form sec-pad">
        <div class="container">
          <div class="iconic-title text-center col-md-12 no-h-padding wow animated fadeIn">
            <div class="col-md-12 no-h-padding">
              <div class="title-icon">
                <span>
                  <i class="pe-7s-id pe-2x"></i>
                </span>
              </div>
            </div>
            <div class="col-md-12 no-h-padding">
              <h1>Fale conosco</h1>
              <p>Envie sua mensagem e responderemos o mais breve possível</p>
            </div>
          </div>

          <div class="col-md-8 col-md-offset-2 text-center sec-h-pad sec-q-pad-t wow animated fadeIn"></div>

          <div class="col-md-6 col-md-offset-3">
            <input
              type="text"
              class="def-input fullwidth mar-b-20 wow animated fadeIn"
              placeholder="Nome"
            />
            <input
              type="text"
              class="def-input fullwidth mar-b-20 wow animated fadeIn"
              placeholder="E-mail"
            />
            <textarea
              cols="30"
              rows="5"
              class="def-input fullwidth mar-b-20 wow animated fadeIn"
              placeholder="Sua mensagem"
            ></textarea>
            <button class="def-btn btn-solid fullwidth mar-t-10 wow animated fadeIn">
              Enviar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
