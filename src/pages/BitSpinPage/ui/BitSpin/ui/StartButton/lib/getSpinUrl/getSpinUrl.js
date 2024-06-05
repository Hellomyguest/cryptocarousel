import Spin0 from "../../../../lib/Spins/Spin0.webp";
import Spin1 from "../../../../lib/Spins/Spin1.webp";
import Spin2 from "../../../../lib/Spins/Spin2.webp";
import Spin3 from "../../../../lib/Spins/Spin3.webp";
import Spin4 from "../../../../lib/Spins/Spin4.webp";
import Spin5 from "../../../../lib/Spins/Spin5.webp";
import Spin6 from "../../../../lib/Spins/Spin6.webp";
import SpinGif0 from "../../../../lib/Spins/gif/Spin0.gif";
import SpinGif1 from "../../../../lib/Spins/gif/Spin1.gif";
import SpinGif2 from "../../../../lib/Spins/gif/Spin2.gif";
import SpinGif3 from "../../../../lib/Spins/gif/Spin3.gif";
import SpinGif4 from "../../../../lib/Spins/gif/Spin4.gif";
import SpinGif5 from "../../../../lib/Spins/gif/Spin5.gif";
import SpinGif6 from "../../../../lib/Spins/gif/Spin6.gif";

const SPINS_MAP = {
  0: Spin0,
  1: Spin1,
  2: Spin2,
  3: Spin3,
  4: Spin4,
  5: Spin5,
  6: Spin6,
};

const GIFSPINS_MAP = {
  0: SpinGif0,
  1: SpinGif1,
  2: SpinGif2,
  3: SpinGif3,
  4: SpinGif4,
  5: SpinGif5,
  6: SpinGif6,
};

export const getUrl = async (index, isWebp) => {
  const response = await fetch(isWebp ? SPINS_MAP[index] : GIFSPINS_MAP[index]);
  const blobed = await response.blob();
  const url = await URL.createObjectURL(blobed);
  return url;
};
