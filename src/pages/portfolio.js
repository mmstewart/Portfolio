import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'

import '../components/layout.css';
import '../styles/portfolio.css';

const PortfolioPage = ({ data }) => (
	<div>
		<Layout>
			<div className="under">
				<div className="lay">
					<div className="outline">
						<SEO title="Home" />
						<div className="paragraph2">
							<p className="intro">
								<u>Portfolio</u>
							</p>
							<h1>Projects</h1>
							<p className="note">
								{' '}
								A select few projects that I have created, from personal websites to web applications
								and software tools.
							</p>
						</div>
						<div className="row">
							<div className="col-l">
								<div className="desc">
									<h3>Supermicro Ultra Builds Website</h3>
									<div className="bubbles-l">
										<span id="bubbles">Gatsby.js</span>
										<span id="bubbles">GraphQL</span>
										<span id="bubbles">jQuery</span>
										<span id="bubbles">CSS3</span>
									</div>
									<div>
										<p className="desc2">
											A website created to help the production team of Equus build servers with
											Supermicro components with no errors.
										</p>
										<p className="notice">
											Cannot link the website or source code of the project under company terms.
										</p>
									</div>
								</div>
							</div>
							<div className="col-r">
								<div className="col-image">
									<Img className="imgs" fluid={data.image1.childImageSharp.fluid} />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-l">
								<div className="desc">
									<h3>Portfolio Website</h3>
									<div className="bubbles-l">
										<span id="bubbles">Gatsby.js</span>
										<span id="bubbles">GraphQL</span>
										<span id="bubbles">CSS3</span>
									</div>
									<div>
										<p className="desc2">
											The website you are currently looking at! Contains all the skills I know,
											some of the projects I created, and expertise as a software developer.
										</p>
									</div>
									<a
										className="desc-link1"
										id="btns"
										href="https://marcusstewart.me"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Site
									</a>
									<a
										className="desc-link2"
										id="btns"
										href="https://github.com/mmstewart/Portfolio"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Source
									</a>
								</div>
							</div>
							<div className="col-r">
								<div className="col-image">
									<a href="https://marcusstewart.me" target="_blank" rel="noopener noreferrer">
										<Img className="imgs" fluid={data.image2.childImageSharp.fluid} />
									</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-l">
								<div className="desc">
									<h3>Node-RED Temperature Monitoring Flow</h3>
									<div className="bubbles-l">
										<span id="bubbles">Bash</span>
										<span id="bubbles">Node-RED</span>
									</div>
									<div>
										<p className="desc2">
											Created a server laboratory temperature-monitoring application to power off
											the servers once the temperature of the laboratory passes the temperature
											limit.
										</p>
									</div>
									<a
										className="desc-link2"
										href="https://github.com/mmstewart/Node-RED-Temperature-Monitoring-Flow"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Source
									</a>
								</div>
							</div>
							<div className="col-r">
								<div className="col-image">
									<a
										href="https://github.com/mmstewart/Node-RED-Temperature-Monitoring-Flow"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Img className="imgs" fluid={data.image3.childImageSharp.fluid} />
									</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-l">
								<div className="desc">
									<h3>Commvault Hardware Monitoring Service</h3>
									<div className="bubbles-l">
										<span id="bubbles">Bash</span>
									</div>
									<div>
										<p className="desc2">
											A server monitoring utility for capturing hardware status and fault events.
											This tool allowed clients to view and notifies of failures from physical
											disk, virtual disks, fans, and power distribution units.
										</p>
										<p className="notice">
											Cannot link the website or source code of the project under company terms.
										</p>
									</div>
								</div>
							</div>
							<div className="col-r">
								<div className="col-image">
									<Img className="imgs" fluid={data.image4.childImageSharp.fluid} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-l">
								<div className="desc">
									<h3>Motivational Quotes</h3>
									<div className="bubbles-l">
										<span id="bubbles">React.js</span>
										<span id="bubbles">SCSS</span>
										<span id="bubbles">Unsplash API</span>
									</div>
									<div>
										<p className="desc2">
											A website that generates motivational quotes from a local database and
											powerful images from Unsplash to help motivate people. Inspired by the
											popular chrome extension, Momentum.
										</p>
									</div>
									<a
										className="desc-link1"
										id="btns"
										href="https://reason-quotes.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Site
									</a>
									<a
										className="desc-link2"
										id="btns"
										href="https://github.com/mmstewart/Motivational-Quotes"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Source
									</a>
								</div>
							</div>
							<div className="col-r">
								<div className="col-image">
									<a
										href="https://reason-quotes.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Img className="imgs" fluid={data.image5.childImageSharp.fluid} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	</div>
);

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "1.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 540, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		image2: file(relativePath: { eq: "2.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 540, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		image3: file(relativePath: { eq: "3.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 540, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		image4: file(relativePath: { eq: "4.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 540, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		image5: file(relativePath: { eq: "5.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 540, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default PortfolioPage;
