import { useRef } from "react";
import DisplaySection from "./Components/DisplaySection";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import SoundSection from "./Components/SoundSection";
import WebgiViewer from "./Components/WebgiViewer";

function App() {

  const WebgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <div ref={contentRef} id="content">
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={WebgiViewerRef}  />
    </div>
  );
}

export default App;
