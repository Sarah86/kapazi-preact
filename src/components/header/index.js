import { useEffect } from "react";
import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import { contatos } from "../infos";

const Header = () => {
  useEffect(() => {
    function fadeIn() {
      $(".dropdown-menu", this).fadeIn("fast");
    }
    function fadeOut() {
      $(".dropdown-menu", this).fadeOut("fast");
    }

    // -------------- Dropdown --------------
    if ($("html").hasClass("no-touchevents")) {
      $(".dropdown").on("mouseenter", fadeIn).on("mouseleave", fadeOut);
    }
  }, []);

  const toggleMenu = () => {
    const navbar = document.querySelector(".navbar-toggle");
    const navstyle = getComputedStyle(navbar);
    const navdisplay = navstyle.display;
    if (navdisplay === "block"){
      navbar.click();
    } else{
      return
    }
  }

  return (
    <header class={style.header}>
      <div class="container-fluid">
        <nav class="navbar navbar-inverse navbar-fixed-top megamenu">
          <div class="top-content">
            <div class="container">
              <ul>
                <a href={contatos.maps}>
                  <li>
                    <i class="pe-7s-map-marker"></i>
                    {contatos.endereco}
                  </li>
                </a>
                <li>
                  <a href={`tel:${contatos.numerorj}`} class="white">
                    <i class="pe-7s-call"></i>
                    {contatos.telrj}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contatos.email}`} class="white">
                    <i class="pe-7s-mail"></i>
                    {contatos.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand no-effect" href="/">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class={`nav navbar-nav navbar-right ${style.customnavbar}`}>
                <li class="dropdown">
                  <Link activeClassName={style.active} href="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li class="dropdown">
                  <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                    Produtos <b class="caret"></b>
                  </a>
                  <ul
                    class="dropdown-menu small-dropdown-menu"
                    style="display: none;"
                  >
                    <li class="dropdown-list-wrap">
                      <ul
                        class={`${style.dropmenu} col-sm-12 no-h-padding dropdown-list titled list-unstyled`}
                      >
                        <li>
                          <Link activeClassName={style.active} href="/thermodeck" onClick={toggleMenu}>Thermodeck</Link>
                        </li>
                        <li>
                          <Link activeClassName={style.active} href="/softtech" onClick={toggleMenu}>Soft Tech</Link>
                        </li>
                        <li>
                          <Link activeClassName={style.active} href="/vinilkap" onClick={toggleMenu}>Vinilkap</Link>
                        </li>
                        <li>
                          <Link activeClassName={style.active} href="/nauticotrancado" onClick={toggleMenu}>Náutico Trançado</Link>
                        </li>
                        <li>
                          <Link activeClassName={style.active} href="/nauticlean" onClick={toggleMenu}>Nauticlean</Link>
                        </li>
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
};

export default Header;
