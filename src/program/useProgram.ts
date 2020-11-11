import { useState } from "react";
import { BackgroundColor } from "../constants";

const useProgram = () => {
  const [background, setBackground] = useState(BackgroundColor.BLUE);

  return { background, setBackground };
};

export default useProgram;
