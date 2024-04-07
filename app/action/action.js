import { setSong } from "../reducers/songReducer";

export const PlaySong = (song) => ({
  type: setSong,
  payload: song,
});
