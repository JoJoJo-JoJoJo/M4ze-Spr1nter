// import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer.tsx";
import Game from "./Game/Game.tsx";
import Header from "./Header/Header.tsx";

function App() {
  // const [page, setPage] = useState<"home" | "game">("home");

  // const handleHomeBtnClick = () => setPage("home");
  // const handleDiffBtnClick = () => {

  //   setPage("game");
  // }

  return (
    <div className="app">
      <Header />
      {/* {page === "home" ? <p></p> : <Game />} */}
      <Game />
      <Footer />
    </div>
  );
}

export default App;
