export default function StatItem({ title, value, positive, negative }) {
    let valueClass = '';
    if (positive) valueClass = 'text-green-400';
    if (negative) valueClass = 'text-red-400';
  
    return (
      <div>
        <span className="text-gray-400">{title}</span>
        <div className={`text-lg font-semibold ${valueClass}`}>{value}</div>
      </div>
    );
  }
  