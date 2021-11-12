import Calendar from "./Calendar";

const MainPage = () => {
    return (
        <main>
            <nav className="background">
                <div className="background-title">
                    <h1 className="top-title mt-5">Lista de Tarefas</h1>
                </div>
                {/* <div className="background-filter"></div> */}
            </nav>
            <div className="container">
                <section className="calendar">
                    <Calendar/>
                </section>
            </div>
            <footer className="footer bg-purple-light-7">
                <p>Developed by <a href="https://github.com/amandie-ct">Amanda Carvalho</a></p>
                <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
            </footer>
        </main>
    );
}
 
export default MainPage;