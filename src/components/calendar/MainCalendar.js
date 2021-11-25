import Calendar from "./Calendar";
import Footer from "./Footer";

let nome = "Amanda";

const MainCalendar = () => {
    return (
        <main className="background-img">
            <div className="container">
                    <div className="background-calendar-container">

                        <header className="background-title">
                            <h1 className="top-title">Gerenciador de tarefas</h1>
                        </header>

                        <div className="intro-title">
                            <h1>Olá, {nome}!</h1>
                            <p>Para começar a usar o gerenciador de tarefas, selecione um dia abaixo:</p>
                        </div>

                        <Calendar/>
                    </div>
            </div>
            <Footer/>
        </main>
    );
}
 
export default MainCalendar;