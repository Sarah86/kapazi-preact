import style from './style.css'

const NotFound = () => (
      <section class={`error-404 ${style.notfoundpage}`}>
      <div class="container fullheight">

        <div class="valign-wrap fullheight fullwidth">
          <div class="valign-middle halfwidth">
            <div class="fullwidth no-h-pad left-section">
              <div class="text-wrapper">
                <h1 class="error-message-title">404</h1>
                <h2 class="error-message-subtitle">Essa página não existe</h2>
                <div class="bottom-buttons">
                  <a href="/" class="def-btn btn-solid">Voltar para a página principal</a>
                </div>
              </div>
            </div>
          </div>

          <div class="valign-middle halfwidth" style="background: hsl(173 100% 38% / 1); padding: 6em 2em;">
            <div class="fullwidth no-h-pad right-section">
              <span class="multipaded">Opa! Você está navegando em mares desconhecidos. Tente outra página.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
)

export default NotFound;