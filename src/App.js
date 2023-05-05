import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [beastData, setBeastData] = useState(data);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  function handleModal(beast) {
    setModalShow(!modalShow);
    setModalData(beast);
  }

  function handleFilter(event) {
    const numHorns = parseInt(event.target.value);
    const myFilteredBeasts = data.filter((beast) => beast.horns === numHorns);

    event.target.value === ""
      ? setBeastData(data)
      : setBeastData(myFilteredBeasts);
  }

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <Main beastData={beastData} handleModal={handleModal} />
      <Footer />
      {modalShow && (
        <SelectedBeast modalData={modalData} handleModal={handleModal} />
      )}
    </div>
  );
}

export default App;
