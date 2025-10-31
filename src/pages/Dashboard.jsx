import { useEffect, useState } from "react";
import { getTopTracks } from "../api/api";
import ScoreCard from "../components/ScoreCard";

export default function Dashboard() {
  const [tracks, setTracks] = useState([]);
  const [score, setScore] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

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

  // 🔥 Function to trigger Gemini roast
  const handleAnalyze = async () => {
    if (!tracks.length) return alert("No tracks to analyze 😅");

    setLoading(true);
    const songList = tracks.map((t) => `${t.name} by ${t.artists[0].name}`);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songs: songList }),
      });

      const data = await response.json();
      setAnalysis(data.text);
    } catch (err) {
      console.error("Error:", err);
      setAnalysis("Couldn't generate analysis 😬");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Obscurity Results 🎧
      </h1>

      {score && <ScoreCard score={score} />}

      <div className="text-center mt-6">
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-200"
        >
          {loading ? "Analyzing..." : "🔥 Roast My Music Taste"}
        </button>
      </div>

      {analysis && (
        <div className="bg-gray-800 text-white mt-6 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-3">🧠 Gemini Says:</h2>
          <p className="text-gray-300 whitespace-pre-line">{analysis}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition duration-200"
          >
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold">{track.name}</h2>
            <p className="text-gray-400">
              {track.artists.map((a) => a.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
