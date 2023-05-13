import "./style.css"

const Header = () => {
	return (<header className="header">
	<div className="header__wrapper">
		<h1 className="header__title">
			<strong>Hi, my name is <em>Andrei</em></strong><br />
			a frontend developer
		</h1>
		<div className="header__text">
			<p>with enthusiasm for learning and creativity.</p>
		</div>
		<a href="#!" className="btn">Download CV</a>
	</div>
</header>);
}
 
export default Header;