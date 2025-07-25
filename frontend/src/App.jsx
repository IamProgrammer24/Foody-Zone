import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10">
        <Navbar />
        <FoodList />
      </div>
    </div>
  );
}
export default App;
