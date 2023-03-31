import React from "react";

function Footer(){
	return (
		<div className="footer">
			<div className="reach-out-column">
				<h3 className="reach-out-text">Reach Out To Us</h3>
				<div className="reach-out-icons-row">
					<a href="#"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
					<a href="#">
					<i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
				</div>
			</div>
			<div className="reach-out-centre-column">
				<h1 className="company-name"><a href="/">BlogSight</a></h1>
				<p className="copyright-text">Copyright &copy; BlogSight</p>
			</div>
			<div className="reach-out-contact-column">
				<h3 className="contact-us-text">Contact Us</h3>
				<div className="contact-us-icons-row">
					<a href="#"><i class="fa fa-phone fa-2x" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	);
}

export default Footer;