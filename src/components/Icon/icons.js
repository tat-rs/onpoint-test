import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";

const defaultAttributes = {
  width: "100%",
  preserveAspectRatio: "xMidYMid meet",
  style: {
    maxWidth: "inherit",
    maxHeight: "inherit",
    height: "inherit",
    strokeWidth: "2px",
  },
};

const icons = {
  home: <Home {...defaultAttributes} />,
  arrowRight: <ArrowRight {...defaultAttributes} />,
};

export default icons;
