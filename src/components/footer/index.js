import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	 <footer>
		<div class="column-container">
		  <div class="container">
  
			<div class="col-md-3 col-sm-3">
			  <div class="footer-column margin-responsive">
				<div class="title">
				  <h4 class="underlined-heading">Sobre nós</h4>
				</div>
				<div class="content">
				  <p>Marsh mallow muffin soufflé jelly-o tart cake Marsh mallow macaroon jelly jubes dont dragee ice cream dessert gummi bears. chocolate topping. Dessert halvah gummies wafer toffee. tiramisu croissant cake.</p>
  				</div>
			  </div> 
			</div>
  
			<div class="col-md-3 col-sm-3">
			  <div class="footer-column margin-responsive">
				<div class="title">
				  <h4 class="underlined-heading">Contact Us</h4>
				</div>
				<div class="content">
				  <div class="media">
					<div class="media-left">
					  <a href="#">
						<i class="pe-7s-map-marker pe-2x"></i>
					  </a>
					</div>
					<div class="media-body">
					  <p>Suave Digital, Rancabentang Street 150, Cimahi</p>
					</div>
				  </div>
				  <div class="media">
					<div class="media-left">
					  <a href="#">
						<i class="pe-7s-phone pe-2x"></i>
					  </a>
					</div>
					<div class="media-body">
					  <p>(022) 123 456 789</p>
					  <p>(021) 789 456 123</p>
					</div>
				  </div>
				  <div class="media">
					<div class="media-left">
					  <a href="#">
						<i class="pe-7s-mail pe-2x"></i>
					  </a>
					</div>
					<div class="media-body">
					  <p><a href="http://demo.suavedigital.com/cdn-cgi/l/email-protection" >[email&#160;protected]</a></p>
					  <p><a href="http://demo.suavedigital.com/cdn-cgi/l/email-protection" >[email&#160;protected]</a></p>
					</div>
				  </div>
				</div>
			  </div>
			</div>

  
			<div class="col-md-3 col-sm-3 contact-us">
			  <div class="footer-column margin-responsive">
				<div class="title">
				  <h4 class="underlined-heading">Subscribe</h4>
				</div>
				<div class="content">
				  <p>Marsh mallow muffin soufflé jelly-o tart cake Marsh mallow macaroon jelly jubes dont dragee ice cream dessert </p>
  
				  <form class="form-inline">
					<div class="form-group">
					  <div class="input-group">
						<input type="text" class="form-control def-input" placeholder="Your Email"/>
						<div class="input-group-btn">
						  <button type="button" class="def-btn btn-solid">Send</button>
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
			  <div class="col-md-6 col-sm-6 col-xs-6 left-content">&copy; All Right Reserved Suave Digital</div>
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
	  </footer>    
);

export default Footer;
