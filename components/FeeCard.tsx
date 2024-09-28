export default function FeeCard({ title }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400">
            <th>Type</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {title === 'Funding Fee' ? (
            <>
              <tr>
                <td>Funding Received</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Funding Paid</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Net Funding Fee</td>
                <td>$0</td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <td>Maker Rebates Received</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Market Fees Paid</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Net Fees</td>
                <td className="text-red-400">$0</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
