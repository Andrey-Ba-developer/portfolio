import "./style.css"

import vk from "../.././img/icons/vk.svg";
import instagram from "../.././img/icons/instagram.svg";
import twitter from "../.././img/icons/twitter.svg";
import gitHub from "../.././img/icons/gitHub.svg";
import linkedIn from "../.././img/icons/linkedIn.svg";


const Footer = () => {
	return (<footer className="footer">
		<div className="container">
			<div className="footer__wrapper">
				<ul className="social">
					<li className="social__item"><a href="https://vk.com/" target="_blank" rel="noreferrer"><img src={vk} alt="Link" /></a></li>
					<li className="social__item"><a href="instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="Link" /></a></li>
					<li className="social__item"><a href="twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="Link" /></a></li>
					<li className="social__item"><a href="https://github.com/Andrey-Ba-developer" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
					<li className="social__item"><a href="linkedin.com" target="_blank" rel="noreferrer"><img src={linkedIn} alt="Link" /></a></li>
				</ul>
				<div className="copyright">
					<p>© 2023 Andrey-Ba-developer</p>
				</div>
			</div>
		</div>
	</footer>);
}

export default Footer;