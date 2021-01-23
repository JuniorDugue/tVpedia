const API_BASE_URL = "http://api.tvmaze.com";

export async function apiGet(queryString) {
  const res = await fetch(`${API_BASE_URL}${queryString}`).then((response) => response.json());
  return res;
}
