// eslint-disable-next-line import/prefer-default-export
export enum Status {
  SELECT_GAME,
  CREATE_ROOM,
  JOIN_ROOM,
  PREJOIN_ROOM,
  PLAY_GAME,
  JOIN_LOBBY,
}

export enum Event {
  CREATE_GAME = "create game",
  FIND_LOBBY = "find lobby",
  JOIN_ROOM = "join room",
  PLAY_GAME = "play game",
  RESET_GAME = "reset game",
  JOIN_LOBBY = "join lobby",
  CHANGE_COSTUME = "change costume",
  PLAY_AGAIN = "play again",
}
