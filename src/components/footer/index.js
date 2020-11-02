import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	 <footer>
		<div class="column-container">
		  <div class="container">
  
			<div class="col-md-4 col-sm-4">
			  <div class="footer-column margin-responsive">
				<div class="title">
				  <h4 class="underlined-heading">Sobre nós</h4>
				</div>
				<div class="content">
				  <p>Marsh mallow muffin soufflé jelly-o tart cake Marsh mallow macaroon jelly jubes dont dragee ice cream dessert gummi bears. chocolate topping. Dessert halvah gummies wafer toffee. tiramisu croissant cake.</p>
  				</div>
			  </div> 
			</div>
  
			<div class="col-md-4 col-sm-4">
			  <div class="footer-column margin-responsive">
				<div class="title">
				  <h4 class="underlined-heading">Contato</h4>
				</div>
				<div class="content">
				  <div class="media">
					<div class="media-left">
					  <a href="#">
						<i class="pe-7s-phone pe-2x"></i>
					  </a>
					</div>
					<div class="media-body">
					  <p>(24) 99864-8221 - 𝗥𝗝</p>
					  <p>(11) 94177-9925 - 𝗦𝗣</p>
					</div>
				  </div>
				  <div class="media">
					<div class="media-left">
					  <a href="#">
						<i class="pe-7s-mail pe-2x"></i>
					  </a>
					</div>
					<div class="media-body">
					  <p><a href="mailto:𝗸𝗮𝗽𝗮𝘇𝗶𝗽𝗼𝗿𝗮𝗶@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺" >𝗸𝗮𝗽𝗮𝘇𝗶𝗽𝗼𝗿𝗮𝗶@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺</a></p>
					</div>
				  </div>
				</div>
			  </div>
			</div>

  
			<div class="col-md-4 col-sm-4 contact-us">
			  <div class="footer-column margin-responsive">
				<div class="title">
				  <h4 class="underlined-heading">Inscreva-se</h4>
				</div>
				<div class="content">
				  <p>Inscreva-se pare receber novidades</p>
  
				  <form class="form-inline">
					<div class="form-group">
					  <div class="input-group">
						<input type="text" class="form-control def-input" placeholder="Seu e-mail"/>
						<div class="input-group-btn">
						  <button type="button" class="def-btn btn-solid">Enviar</button>
						</div>
					  </div>
					</div>
				  </form>
				</div>
			  </div> 
			</div> 
  
		  </div> 
		</div>
  
		<div class="copyright col-md-12 no-h-padding">
		  <div class="left-section col-md-6 col-sm-6"></div>
		  <div class="container content-wrap">
			<div class="content">
			  <div class="col-md-6 col-sm-6 col-xs-6 left-content">&copy; Todos os direitos reservados a Kapazi Náutica Por Aí</div>
			  <div class="col-md-6 col-sm-6 col-xs-6  right-content text-right">
				<div class="social-media">
				  <a href="#"><i class="fa fa-facebook"></i></a>
				  <a href="#"><i class="fa fa-twitter"></i></a>
				  <a href="#"><i class="fa fa-google-plus"></i></a>
				  <a href="#"><i class="fa fa-dribbble"></i></a>
				  <a href="#"><i class="fa fa-vimeo"></i></a>
				</div>
			  </div>
			</div> 
		  </div> 
		</div>
		<div class="copyright col-md-12 no-h-padding">
		  <p class={style.development}> Desenvolvido com ❤️ por <a href="https://sarahgoncalves.netlify.app/">Sarah Gonçalves</a> </p>
		</div>
	  </footer>    
);

export default Footer;
