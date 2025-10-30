import { useEffect, useState } from "react";
import { getTopTracks } from "../api/api";
import ScoreCard from "../components/ScoreCard";

export default function Dashboard() {
  const [tracks, setTracks] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("access_token");

    if (token) {
      getTopTracks(token).then((data) => {
        setTracks(data.tracks);
        setScore(data.score);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Obscurity Results 🎧</h1>
      {score && <ScoreCard score={score} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tracks.map((track) => (
          <div key={track.id} className="bg-gray-800 p-4 rounded-xl shadow">
            <img src={track.album.images[0]?.url} alt={track.name} className="rounded-md mb-3" />
            <h2 className="text-xl font-semibold">{track.name}</h2>
            <p className="text-gray-400">{track.artists.map(a => a.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
