import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const LandingPage = () => {
    return (
        <div className="background-img-lp">
            <main className="background-landing">
                <section className="container form-c">
                    <form className="form-background">
                        <h1 className="subtitle">ToDo App</h1>
                        <p className="">Para começar, insira suas informações abaixo:</p>
                        <label for="nome" className="labels">Nome</label>
                        <input type="text" id="nome" className="input"></input>
                        <label for="email" className="labels">E-mail</label>
                        <input type="email" id="email" className="input"></input>
                        <Link to="/calendar">
                            <button className="btn-form">Começar&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faArrowRight}/></button>
                        </Link>
                    </form>
                </section>
            </main>
        </div>
    );
}
 
export default LandingPage;