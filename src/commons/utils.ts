import { HatType, Player, PlayerType } from "../interfaces";

// eslint-disable-next-line import/prefer-default-export
export const generateCharacterUrl = (player: Player | null) => {
  if (player?.playerType === PlayerType.PRISONER) {
    return player.hatType === HatType.NEW
      ? "/images/Robber1.PNG"
      : "/images/Robber2.PNG";
  }
  if (player?.playerType === PlayerType.WARDER) {
    return player.hatType === HatType.NEW
      ? "/images/Cop1.PNG"
      : "/images/Cop2.PNG";
  }
  return "";
};
