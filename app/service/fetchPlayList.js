import { httpAxios } from "../httpAxios";

// fetch particular playlist based on token
export async function fetchPlayList(accessToken, id) {
  const response = await httpAxios.get(`/playlists/${id}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  return response.data;
}
