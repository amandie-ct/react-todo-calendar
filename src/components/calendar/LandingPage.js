const LandingPage = () => {
    return (
        <main className="background-filter">
            <section className="container">
                <form className="form-background">
                    <h1 className="subtitle">ToDo App</h1>
                    <p>Para começar, insira suas informações abaixo:</p>
                    <label for="nome" className="labels">Nome</label>
                    <input type="text" id="nome" className="input"></input>
                    <label for="email" className="labels">E-mail</label>
                    <input type="email" id="email" className="input"></input>
                    <button className="btn-form">
                        Começar</button>
                </form>
            </section>
        </main>
    );
}
 
export default LandingPage;