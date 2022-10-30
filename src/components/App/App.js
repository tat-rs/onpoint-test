import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Info from "../Info/Info";
import Description from "../Description/Description";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./App.css";

function App() {
  const [offset, setOffset] = useState(0);
  const { width } = useWindowSize();
  const PAGE_WIDTH = width;

  return (
    <div className="page__content">
      <Header setOffset={setOffset} />
      <Carousel
        offset={offset}
        setOffset={setOffset}
        PAGE_WIDTH={PAGE_WIDTH}
      >
        <Main
          offset={offset}
          setOffset={setOffset}
          PAGE_WIDTH={PAGE_WIDTH}
        />
        <Info />
        <Description />
      </Carousel>
      <Footer />
    </div>
  );
}

export default App;
