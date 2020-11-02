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
            <a class="navbar-brand no-effect" href="/"><img src="assets/images/logo.png" alt=""/></a>
          </div>
        </div>
      </nav>
    </div>
	</header>
);

export default Header;
