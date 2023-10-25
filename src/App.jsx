import { useState } from "react";
import "./App.css";
import Header from "../public/components/Header";
import Meme from "../public/components/Meme";

function App() {
  return (
    <>
      <Header />
      <section>
        <Meme />
      </section>
    </>
  );
}

export default App;
