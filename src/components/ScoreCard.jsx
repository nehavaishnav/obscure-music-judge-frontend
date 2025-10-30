export default function ScoreCard({ score }) {
  return (
    <div className="bg-green-600 p-6 rounded-xl text-center mb-6">
      <h2 className="text-2xl font-bold">Obscurity Score: {score.score}/100</h2>
      <p className="mt-2 text-lg">{score.message}</p>
    </div>
  );
}
