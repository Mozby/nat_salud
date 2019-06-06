import React, { Component } from "react";

import "./css/footer.css";

export default class footer extends Component {
	render() {
		return (
			<div>
				<section className="services">
					<div className="container grid-3 center">
						<div className="className">
							<h4>Contact Us</h4>
							<p>
								<i className="fas fa-phone" aria-hidden="true" />
								+233 24 214 1333
								<i className="fas fa-phone" aria-hidden="true" />
								+233 32 202 3183
							</p>
							<p>
								<i className="fas fa-envelope" aria-hidden="true" />
								team@farmerline.co
							</p>
						</div>
						<div className="className">
							<h4>Kumasi, Ghana Office</h4>
							<p>
								<i className="fas fa-map-marker-alt" /> 10 Prof Sir Acheampong
								Street Plot 29 Block L Old Ahinsan, Kumasi – Ghana
							</p>
						</div>

						<div className="className">
							<h4>Kumasi, Ghana Office</h4>
							<p>
								<i className="fas fa-map-marker-alt" /> 10 Prof Sir Acheampong
								Street Plot 29 Block L Old Ahinsan, Kumasi – Ghana
							</p>
						</div>
						<div>
							<i className="fas fa-briefcase fa-3x" />
							<h3>Freelancing Projects</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
								reiciendis!
							</p>
						</div>
					</div>
				</section>
				<div className="footer">
					<div>
						<p>© 2019 Natural Salud. All Rights Reserved</p>
					</div>
				</div>
			</div>
		);
	}
}
