import { clientId, clientSecret } from "../config/config";

export async function getAccessToken() {
  var authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  };

  return fetch("https://accounts.spotify.com/api/token", authParameters)
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("access_token", res.access_token);
      console.log("got access token ");
      return res.access_token; // Return the access token
    })
    .catch((err) => {
      console.error(err);
      throw new Error("Error fetching access token");
    });
}
