import "./App.css";
import Applications from "./components/applications/Applications";
import Header from "./components/header/Header";

function App() {
  document.title = "iwoca | Application Portal";
  return (
    <div className="App">
      <Header />
      <Applications />
    </div>
  );
}

export default App;
