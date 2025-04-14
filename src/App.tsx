import "./App.css";
import Footer from "./Footer/Footer.tsx";
import Game from "./Game/Game.tsx";
import Header from "./Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Game />
      <Footer />
    </div>
  )
}

export default App
