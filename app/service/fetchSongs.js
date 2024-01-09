import { httpAxios } from "../httpAxios";

export async function fetchSongs(accessToken) {
  const response = await httpAxios.get(`/browse/featured-playlists`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  return response.data;
}
