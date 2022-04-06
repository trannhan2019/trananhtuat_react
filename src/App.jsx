import { cardAkali } from "./assets/images";
import "./App.scss";
import Header from "./components/header/Header";

function App() {
  const img = cardAkali;
  console.log(img);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
