import Header from "./components/Header";
import MyInfo from "./components/MyInfo";

function App() {
  return (
    <div className="flex flex-col relative w-screen h-screen scrollbar-hide bg-main">
      <Header />
      <div className="w-full bg-white">
        <MyInfo />
      </div>
      <div className="bg-gradient-to-b from-[#FFFFFF] to-main h-20"></div>
    </div>
  );
}

export default App;
