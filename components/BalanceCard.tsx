export default function BalanceCard({ title, amount, subAmount, icon }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{icon}</span>
          <span className="text-gray-400">{title}</span>
        </div>
        <div className="mt-2">
          <span className="text-xl font-semibold">{amount}</span>
          {subAmount && <span className="text-gray-400 ml-2">{subAmount}</span>}
        </div>
      </div>
    );
  }
  