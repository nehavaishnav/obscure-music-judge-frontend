const API_URL = import.meta.env.VITE_API_URL;

export const getTopTracks = async (token) => {
  const res = await fetch(`${API_URL}/spotify/top-tracks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
