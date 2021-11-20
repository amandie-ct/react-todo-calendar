import Calendar from "./Calendar";

const MainPage = () => {
    return (
        <main>
            <nav className="background-calendar">
                    <div className="background-title">
                        <h1 className="top-title">Todo list</h1>
                    </div>
            </nav>

            <div className="container">
                <section className="calendar">
                    <Calendar/>
                </section>
                </div>
            <footer className="footer">
                <p>Developed by <a href="https://github.com/amandie-ct">Amanda Carvalho</a></p>
                <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
            </footer>
        </main>
    );
}
 
export default MainPage;