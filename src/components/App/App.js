import Footer from "../Footer/Footer";
import Header from "../Header/Header";
/* import Main from "../Main/Main"; */
import Info from "../Info/Info";
import "./App.css";

function App() {
  return (
    <div className="page__content">
      <Header />
      {/* <Main /> */}
      <Info />
      <Footer />
    </div>
  );
}

export default App;
