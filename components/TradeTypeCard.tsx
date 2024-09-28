export default function TradeTypeCard({ type }) {
  const isLong = type === 'Long';
  const borderColor = isLong ? 'border-green-500' : 'border-red-500';

  return (
    <div className={`bg-gray-800 p-4 rounded-lg border-t-2 ${borderColor}`}>
      <h3 className="text-xl font-semibold mb-4">{type}s</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-3xl font-bold">0</div>
          <div className="text-sm text-gray-400">0.00% of all your total trades were {type.toLowerCase()}</div>
        </div>
        <div>
          <div className="text-3xl font-bold">0.00%</div>
          <div className="text-sm text-gray-400">{type} Trade Win Ratio</div>
          <div className="text-sm text-gray-400">0 Wins / 0 Losses</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Avg {type} Trade Duration</div>
          <div className="text-lg font-semibold">0H 0m 0s</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-400">Total {type} Realised PNL</div>
        <div className={`text-lg font-semibold ${isLong ? 'text-green-400' : 'text-red-400'}`}>+$0.00</div>
      </div>
    </div>
  );
}
