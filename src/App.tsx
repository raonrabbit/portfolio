import Header from "./components/Header";
import Interview from "./components/Interview";
import MyInfo from "./components/MyInfo";

function App() {
  return (
    <div className="relative w-full bg-white">
      <Header />
      <MyInfo />
      <div className="relative" style={{ marginTop: "100vh" }}>
        <Interview />
      </div>
    </div>
  );
}

export default App;
