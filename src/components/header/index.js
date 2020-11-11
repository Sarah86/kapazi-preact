import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div class="container-fluid">
      <nav class="navbar navbar-inverse navbar-fixed-top megamenu">
        <div class="top-content">
          <div class="container">
            <ul>
              <li>
                <i class="pe-7s-map-marker"></i>
                AV ENGENHEIRO WINSTON MARUCA, 10 - LJ 14 - ANGRA DOS REIS - RJ
              </li>
              <li>
                
                <i class="pe-7s-call"></i>
                +55 24 99864-8221
              </li>
              <li>
                <i class="pe-7s-mail"></i>
                <a href="mailto:kapazirio@gmail.com">kapazirio@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand no-effect" href="/"><img src="assets/images/logo.png" alt=""/></a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class={`nav navbar-nav navbar-right ${style.customnavbar}`}>
              <li class="dropdown">
                  <Link activeClassName={style.active} href="/">Home</Link>
              </li>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle">Produtos <b class="caret"></b></a>
                <ul class="dropdown-menu small-dropdown-menu" style="display: none;">
                  <li class="dropdown-list-wrap">
                    <ul class={`${style.dropmenu} col-sm-12 no-h-padding dropdown-list titled list-unstyled`}>
                      <li><Link href="/thermodeck">Thermodeck</Link></li>
                      <li><Link href="/softtech">Soft Tech</Link></li>
                      <li><Link href="/vinilkap">Vinilkap</Link></li>
                      <li><Link href="/nauticotrancado">Náutico Trançado</Link></li>
                      <li><Link href="/nauticlean">Nauticlean</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
             </ul>
          </div>
        </div>
      </nav>
    </div>
	</header>
);

export default Header;
