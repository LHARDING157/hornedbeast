import HornedBeast from "../HornedBeast/Beasts";
import data from "../../data.json";
import "./Main.css";
import handleModal from "../../App";

export default function Main() {
  const beasts = data.map((item) => {
    return (
      <HornedBeast
        id={item._id}
        title={item.title}
        imageUrl={item.image_url}
        description={item.description}
        horns={item.horns}
        handleModal={handleModal}
      />
    );
  });

  return (
    <main class="main-container">
      <div class="beast-container">{beasts}</div>
    </main>
  );
}
