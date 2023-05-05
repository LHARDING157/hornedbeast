import HornedBeast from "../HornedBeast/Beasts";
import "./Main.css";

export default function Main({ beastData, handleModal }) {
  return (
    <main class="main-container">
      <div class="beast-container">
        {beastData.map((beast) => {
          return <HornedBeast beast={beast} handleModal={handleModal} />;
        })}
      </div>
    </main>
  );
}
