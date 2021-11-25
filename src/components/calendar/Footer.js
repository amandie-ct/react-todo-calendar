import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Imagem adquirida através do site <a href="https://unsplash.com/">Unsplash</a>&nbsp;|&nbsp;</p>
            <p>Desenvolvido por Amanda Carvalho&nbsp;|&nbsp;</p>

            <div className="footer-links">
                <a href="https://github.com/amandie-ct">
                    <span>
                        <FontAwesomeIcon icon={faGithub}/>
                    </span>
                </a>
            </div>

            <div className="footer-links">
                <a href="https://www.linkedin.com/in/carvalhot-amanda/">
                    <span>
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </span>
                </a>
            </div>
            
        </footer>
    );
}
 
export default Footer;