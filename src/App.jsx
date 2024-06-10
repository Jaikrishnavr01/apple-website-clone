import DisplaySection from "./Components/DisplaySection";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import SoundSection from "./Components/SoundSection";
import WebgiViewer from "./Components/WebgiViewer";

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Jumbotron/>
    <SoundSection/>
    <DisplaySection/>
    <WebgiViewer/>
    </div>
  );
}

export default App;
