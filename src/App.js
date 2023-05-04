import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [beastModal, setBeastModal] = useState({});

  function handleModal(beast) {
    setShowModal(!showModal);
    setBeastModal(beast);
  }

  return (
    <div className="App">
      <Header />
      <Main handleModal={handleModal} />
      <SelectedBeast beastModal={beastModal} handleModal={handleModal} />
      <Footer />
    </div>
  );
}
