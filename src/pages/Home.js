import Header from "./../components/header/Header"

const Home = () => {
	return (
		<>
			<Header />

			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								HTML, HTML5, CSS3, JavaScript, jQuery, React Redux, TypeScript, Git, Jira, Bootstrap, Gulp, Адаптивная верстка, BEM, Material UI, Next.js.

							</p>
						</li>
					</ul>

				</div>
			</main>
		</>
	);
}

export default Home;