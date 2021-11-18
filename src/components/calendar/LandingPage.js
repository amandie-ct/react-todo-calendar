import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <main className="background-filter">
            <section className="container">
                <form className="form-background">
                    <h1 className="subtitle">ToDo App</h1>
                    <p className="pt-2 pb-2">Para começar, insira suas informações abaixo:</p>
                    <label for="nome" className="labels">Nome</label>
                    <input type="text" id="nome" className="input"></input>
                    <label for="email" className="labels">E-mail</label>
                    <input type="email" id="email" className="input"></input>
                    <Link to="/calendar">
                        <button className="btn-form">Enviar</button>
                    </Link>
                </form>
            </section>
        </main>
    );
}
 
export default LandingPage;