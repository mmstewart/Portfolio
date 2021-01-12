import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';
import "../components/layout.css";
import "../styles/index.css";

const IndexPage = () => (
	<div>
		<Layout>
			<div className="under">
				<div className="lay">
					<div className="outline">
						<SEO title="Home" />
						<div className="paragraph">
							<p className="intro">
								<Typist
									avgTypingDelay={110}
									stdTypingDelay={20}
									cursor={{ blink: true, hideWhenDone: true, hideWhenDoneDelay: 2900 }}
								>
									<Typist.Delay ms={800} />
									<u>Hey, I'm Marcus</u>
								</Typist>
							</p>
							<h1>
								I am a web and software developer proficient at creating web applications and solving
								challenging solutions.
							</h1>
							<p>
								You can catch me working with the latest front-end frameworks to create websites and
								projects. I also have experience in other object-oriented programning languages such as
								Java, Python, C as well as networking and servers. I am a continuous learner that loves
								to learn new languages and technologies that help develop my skills and challenge my
								growth as a developer.
							</p>
							<div className="gap">
								<a
									href="mailto:mss.stewart1@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									class="ind-ln"
								>
									Contact me
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	</div>
);

export default IndexPage;
