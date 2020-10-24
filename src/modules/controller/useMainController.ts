import { useContext, useEffect, useState } from "react";
import { Status } from "../../constants";
import { SocketContext } from "../../socket/context";

const useMainController = () => {
  const [status, setStatus] = useState<Status>(Status.SELECT_GAME);
  const { programData } = useContext(SocketContext);

  useEffect(() => {
    if (programData.myPlayer) {
      setStatus(Status.PLAY_GAME);
    } else if (programData.roomID) {
      setStatus(Status.JOIN_ROOM);
    }
  }, [programData, setStatus]);

  return { status, setStatus };
};

export default useMainController;
