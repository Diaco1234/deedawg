export default function StatCard({ title, value, subValue, icon }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-gray-400">{title}</span>
      </div>
      <div className="text-xl font-semibold">{value}</div>
      {subValue && <div className="text-sm text-gray-400">{subValue}</div>}
    </div>
  );
}
