import { useState, useEffect } from "react";
import {
  SCREEN_SM,
  SCREEN_SMM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
} from "./const-breakpoints";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width > SCREEN_SM,
    isScreenSmm: width > SCREEN_SMM,
    isScreenMd: width > SCREEN_MD,
    isScreenLg: width > SCREEN_LG,
    isScreenXl: width > SCREEN_XL,
    isScreenXxl: width > SCREEN_XXL,
  };
};