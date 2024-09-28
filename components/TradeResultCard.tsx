export default function TradeResultCard({ type }) {
  const isWinning = type === 'Winning';
  const borderColor = isWinning ? 'border-green-500' : 'border-red-500';

  return (
    <div className={`bg-gray-800 p-4 rounded-lg border-t-2 ${borderColor}`}>
      <h3 className="text-xl font-semibold mb-4">{type} Trades</h3>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400">
            <th>Trade Type</th>
            <th>No.of Trades</th>
            <th>Avg Duration</th>
            <th>Avg Size</th>
            <th>Avg {isWinning ? 'Gain' : 'Loss'}</th>
          </tr>
        </thead>
        <tbody>
          {['Long', 'Short', 'Both'].map((tradeType) => (
            <tr key={tradeType}>
              <td>{tradeType}</td>
              <td>No.of Trades</td>
              <td>0H 0m 0s</td>
              <td>$0</td>
              <td className={isWinning ? 'text-green-400' : 'text-red-400'}>+$0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
