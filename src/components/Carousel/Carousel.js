/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from "react";
import "./Carousel.css";

function Carousel({
  children, offset, setOffset, PAGE_WIDTH,
}) {
  const [touchPosition, setTouchPosition] = useState(null);

  function onSwipeBack() {
    const newOffset = offset + PAGE_WIDTH;
    setOffset(Math.min(newOffset, 0));
  }

  function onSwipeTo() {
    const newOffset = offset - PAGE_WIDTH;
    const maxOffset = -(PAGE_WIDTH * (children.length - 1));
    setOffset(Math.max(newOffset, maxOffset));
  }

  function handleTouchStart(e) {
    const touchDown = e.clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(e) {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      onSwipeTo();
    }

    if (diff < -5) {
      onSwipeBack();
    }

    setTouchPosition(null);
  }

  return (
    <div className="carousel">
      <div
        role="slider"
        aria-valuenow="1"
        aria-valuemin="1"
        aria-valuemax={children.length}
        tabIndex={0}
        onTouchStart={(e) => handleTouchStart(e.touches[0])}
        onTouchMove={(e) => handleTouchMove(e.touches[0])}
        onMouseDown={(e) => handleTouchStart(e)}
        onMouseUp={(e) => handleTouchMove(e)}
        className="carousel__content"
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {children}
      </div>
    </div>

  );
}

export default Carousel;
