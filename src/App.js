import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/RightSection";

function App() {
  return (
    <div className="App">
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-xl-6 banner-image-sec">
            <LeftSection />
          </div>
          <div className="col-xl-6 form-wrapper">
            <RightSection />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
