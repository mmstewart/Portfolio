import React, { useState} from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./footer.js";
import { slide as Menu } from 'react-burger-menu'

import "../components/layout.css";
import "../utils/fontawesome";
import resume from "../../static/resume.pdf";

/* Active Link Color/Text Decoration */
const activeStyles = {
  textDecoration: `underline #111`,
  textDecorationThickness: '2.5px',
  fontFamily: `Raleway, sans-serif`,
};

const ListLink = props => (
  <li style={{ padding: 14 }}>
    <Link
      style={{ textDecoration: `none`, color: `rgb(100, 100, 100)` }}
      to={props.to}
	  activeStyle={activeStyles}
	  href={props.href}
	  target={props.target}
	  rel={props.rel}
    >
      {props.children}
    </Link>
  </li>
);

if (typeof window !== `undefined`) {
  /* Header Hover Animation When Scrolled Down */
  window.addEventListener("scroll", function () {
    document.body.classList[window.pageYOffset > 5 ? "add" : "remove"](
      "scrolled"
    );
  });
}

export default function Layout({ children }) {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	const getBurgerOpen = (status) => {
		setIsBurgerOpen(status.isOpen);
	};

	const handleClick = () => {
		setIsBurgerOpen(false);
	};

	var styles = {
		bmBurgerButton: {
			position: 'fixed',
			width: '32px',
			height: '25px',
			left: '36px',
			top: '21px',
		},
		bmBurgerBars: {
			background: '#77001d',
		},
		bmBurgerBarsHover: {
			background: ' #000',
		},
		bmCrossButton: {
			height: '35px',
			width: '25px',
		},
		bmCross: {
			background: '#77001d',
		},
		bmMenuWrap: {
			position: 'fixed',
			height: '100%',
			top: `0`,
			left: `0`,
			color: `#fff`
		},
		bmMenu: {
			background: '#fff',
		},
		bmMorphShape: {
			fill: '#373a47',
		},
		bmItemList: {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			display: "flex",
		},
		bmItem: {
			display: 'inline-block',
		},
		bmOverlay: {
			top: `0`,
			left: `0`,
			background: 'rgba(0, 0, 0, 0.45)',
		},
	};

	return (
		<div style={{ outline: `none` }} tabIndex="-1">
			<div className="navbar">
				<div>
					<div>
						<Menu  styles={styles} onStateChange={getBurgerOpen} isOpen={isBurgerOpen}>
							<ListLink to="/" onClick={handleClick}>
								<span id="nav-ln">Home</span>
							</ListLink>
							<ListLink to="/skills/" onClick={handleClick}>
								<span id="nav-ln">Skills</span>
							</ListLink>
							<ListLink to="/portfolio/" onClick={handleClick}>
								<span id="nav-ln">Portfolio</span>
							</ListLink>
							<ListLink
								href={resume}
								to=""
								target="_blank"
								rel="noopener noreferrer"
								onClick={handleClick}
							>
								<span id="nav-ln">Resume</span>
							</ListLink>
						</Menu>
					</div>
					<div>
						<h2>Marcus Stewart</h2>
					</div>
				</div>
			</div>
			<div className="sidebar" id="left">
				<nav>
					<header>
						<h2>Marcus Stewart</h2>
						<div className="sub-sidebar">
							Front-end Geek.
							<br />
							Software Developer.
							<br />
							Enthuastic Leaner.
						</div>
						<div className="lens">
							<nav className="effect">
								<ul>
									<ListLink to="/">
										<span id="ln">Home</span>
									</ListLink>
									<br />
									<ListLink to="/skills/">
										<span id="ln">Skills</span>
									</ListLink>
									<ListLink to="/portfolio/">
										<span id="ln">Portfolio</span>
									</ListLink>
									<ListLink href={resume} to="" target="_blank" rel="noopener noreferrer">
										<span id="ln">Resume</span>
									</ListLink>
								</ul>
							</nav>
						</div>
						<div className="contact">
							Questions? Comments? Concerns? Contact me at:
							<br />
							<a href="mailto:mss.stewart1@gmail.com">mss.stewart1@gmail.com</a>
						</div>
						<div className="socials">
							<ul>
								<li>
									<a
										href="mailto:mss.stewart1@gmail.com"
										title="Email"
										target="_blank"
										rel="noopener noreferrer"
									>
										{' '}
										<FontAwesomeIcon
											icon={['fas', 'envelope']}
											id="hover"
											style={{ color: 'rgb(100, 100, 100)' }}
											size="lg"
										/>
									</a>
								</li>
								<li>
									<a href={resume} title="Resume" target="_blank" rel="noopener noreferrer">
										{' '}
										<FontAwesomeIcon
											icon={['fas', 'file']}
											id="hover"
											style={{ color: 'rgb(100, 100, 100)' }}
											size="lg"
										/>
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com/in/marcusmstewart"
										title="LinkedIn"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon
											icon={['fab', 'linkedin']}
											id="hover"
											style={{ color: 'rgb(100, 100, 100)' }}
											size="lg"
										/>
									</a>
								</li>
								<li>
									<a
										href="https://github.com/mmstewart/"
										title="Github"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon
											icon={['fab', 'github']}
											id="hover"
											style={{ color: 'rgb(100, 100, 100)' }}
											size="lg"
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className="footer">
							Built by <b>Marcus Stewart</b> with{' '}
							<a
								href="https://www.gatsbyjs.org/"
								title="Gatsbyjs"
								target="_blank"
								rel="noopener noreferrer"
							>
								Gatsby
							</a>
						</div>
					</header>
				</nav>
			</div>
			{children}
			<Footer />
		</div>
	);
}
