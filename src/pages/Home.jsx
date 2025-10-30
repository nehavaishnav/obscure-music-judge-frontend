export default function Home() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/login`;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">🎵 Obscure Music Judge</h1>
      <p className="mb-6 text-lg">Find out how unique (or basic 😜) your Spotify taste is!</p>
      <button
        onClick={handleLogin}
        className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100"
      >
        Login with Spotify
      </button>
    </div>
  );
}
