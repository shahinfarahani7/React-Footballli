// import './App.css';

import CardData from "./components/Cart";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Days />
      <div style={{ backgroundColor: "#F5F6FB", paddingTop: "10px" }}>
        <CardData />
      </div>

      <Footer />
    </>
  );
}

export default App;
