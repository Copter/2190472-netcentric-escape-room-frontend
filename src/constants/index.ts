// eslint-disable-next-line import/prefer-default-export
export enum Status {
  SELECT_GAME,
  CREATE_ROOM,
  JOIN_ROOM,
  PLAY_GAME,
}

export enum Event {
  CREATE_GAME = "create game",
  PREJOIN_ROOM = "prejoin room",
  JOIN_ROOM = "join room",
  PLAY_GAME = "play game",
}
