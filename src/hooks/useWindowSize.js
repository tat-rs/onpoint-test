/* eslint-disable import/prefer-default-export */
import { useCallback, useEffect, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthWindow = useCallback(() => {
    setTimeout(() => setWidth(window.innerWidth), 1500);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidthWindow);
    return () => window.removeEventListener("resize", updateWidthWindow);
  });

  return {
    width,
  };
}
