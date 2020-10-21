import { useState } from "react";
import { Status } from "../../constants";

const useMainController = () => {
  const [status, setStatus] = useState<Status>(Status.SELECT_GAME);

  return { status, setStatus };
};

export default useMainController;
