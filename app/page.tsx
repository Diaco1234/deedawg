'use client'

import { useState } from 'react'
import { Bell, ChevronDown, Globe, Settings, User } from 'lucide-react'
import Link from 'next/link'

export default function TradingDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 w-64 ${isMenuOpen ? '' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-8">
          <Link href="/" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            Dashboard
          </Link>
          <Link href="/apimanager" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            API Manager
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-500 hover:text-white">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold">$65504.51</span>
            <span className="text-green-400">$2642.95</span>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="h-6 w-6 text-gray-400" />
            <Settings className="h-6 w-6 text-gray-400" />
            <Bell className="h-6 w-6 text-gray-400" />
            <User className="h-6 w-6 text-gray-400" />
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4">
          {/* Synchronizing data alert */}
          <div className="bg-yellow-900 border border-yellow-800 text-yellow-200 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Synchronizing historical data...</strong>
          </div>

          {/* Balance cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <BalanceCard title="Total Balance" amount="$0.13" subAmount="$0.00" icon="💰" />
            <BalanceCard title="Total Deposits" amount="$0.00" subAmount="0 BTC" icon="⬇️" />
            <BalanceCard title="Total Withdrawals" amount="$0.00" subAmount="0 BTC" icon="⬆️" />
            <BalanceCard title="Overall PNL" amount="$0.13" subAmount="" icon="📊" />
            <BalanceCard title="Futures PNL" amount="$0.00" subAmount="" icon="🔮" />
          </div>

          {/* Filters */}
          <div className="bg-gray-800 p-4 rounded-lg mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <select className="bg-gray-700 text-white rounded px-2 py-1">
                <option>All</option>
              </select>
              <select className="bg-gray-700 text-white rounded px-2 py-1">
                <option>Symbol</option>
              </select>
              <div className="flex items-center bg-gray-700 rounded px-2 py-1">
                <span>2024-03-31 2024-09-27</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </div>
            </div>
            <button className="bg-gray-700 text-white rounded px-2 py-1">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Trading statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <StatCard title="Total Trades" value="0" icon="📊" />
            <StatCard title="Win Rate" value="0% (0 Win / 0 Loss)" icon="🎯" />
            <StatCard title="Avg Trade Duration" value="0H 0m 0s" icon="⏱️" />
            <StatCard title="Long/Short Ratio" value="0% / 0%" subValue="(0 Long / 0 Short)" icon="📈" />
          </div>

          {/* Detailed statistics */}
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatItem title="Total Gain/Loss" value="$0.00" />
              <StatItem title="Avg # of Trades/day" value="0 (0 Day)" />
              <StatItem title="Trade Expectancy" value="0.00" />
              <StatItem title="Avg Trade Win" value="+$0" positive />
              <StatItem title="Avg Daily Gain" value="+$0" positive />
              <StatItem title="Avg Trade Loss" value="$0" />
              <StatItem title="Avg Daily Volume" value="$0.00" />
              <StatItem title="Max Consecutive Win" value="0" />
              <StatItem title="Largest Gain" value="+$0.00" positive />
              <StatItem title="Max Consecutive Loss" value="0" />
              <StatItem title="Largest Losses" value="$0.00" negative />
              <StatItem title="Total Trades Volume" value="$0.00" />
            </div>
          </div>

          {/* Long and Short trades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TradeTypeCard type="Long" />
            <TradeTypeCard type="Short" />
          </div>

          {/* Winning and Losing trades */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <TradeResultCard type="Winning" />
            <TradeResultCard type="Losing" />
          </div>

          {/* Fees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeeCard title="Funding Fee" />
            <FeeCard title="Fees" />
          </div>
        </main>
      </div>
    </div>
  )
}

function BalanceCard({ title, amount, subAmount, icon }: { title: string; amount: string; subAmount?: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-xl text-gray-400">{title}</span>
      </div>
      <div className="mt-2">
        <span className="text-2xl font-semibold">{amount}</span>
        {subAmount && <span className="text-lg text-gray-400 ml-2">{subAmount}</span>}
      </div>
    </div>
  )
}

function StatCard({ title, value, subValue, icon }: { title: string; value: string; subValue?: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-xl text-gray-400">{title}</span>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
      {subValue && <div className="text-lg text-gray-400 mt-2">{subValue}</div>}
    </div>
  )
}

function StatItem({ title, value, positive, negative }: { title: string; value: string; positive?: boolean; negative?: boolean }) {
  let valueClass = ''
  if (positive) valueClass = 'text-green-400'
  else if (negative) valueClass = 'text-red-400'

  return (
    <div>
      <span className="text-lg text-gray-400">{title}</span>
      <div className={`text-xl font-semibold ${valueClass}`}>{value}</div>
    </div>
  )
}

function TradeTypeCard({ type }: { type: 'Long' | 'Short' }) {
  const isLong = type === 'Long'
  const borderColor = isLong ? 'border-green-500' : 'border-red-500'

  return (
    <div className={`bg-gray-800 p-6 rounded-lg border-t-2 ${borderColor} transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110`}>
      <h3 className="text-2xl font-semibold mb-4">{type}s</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-3xl font-bold">0</div>
          <div className="text-lg text-gray-400">0.00% of all your total trades were {type.toLowerCase()}</div>
        </div>
        <div>
          <div className="text-3xl font-bold">0.00%</div>
          <div className="text-lg text-gray-400">{type} Trade Win Ratio</div>
          <div className="text-lg text-gray-400">0 Wins / 0 Losses</div>
        </div>
        <div>
          <div className="text-lg text-gray-400">Avg {type} Trade Duration</div>
          <div className="text-xl font-semibold">0H 0m 0s</div>
        </div>
        <div>
          <div className="text-lg text-gray-400">Win% above</div>
          <div className="text-xl font-semibold">0.00%</div>
          <div className="text-lg text-gray-400 mt-2">Win% below</div>
          <div className="text-xl font-semibold">0.00%</div>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-lg text-gray-400">Total {type} Realised PNL</div>
        <div className={`text-2xl font-semibold ${isLong ? 'text-green-400' : 'text-red-400'}`}>+$0.00</div>
        <div className="text-lg text-gray-400 mt-2">Avg Gain $0 Avg Loss $0</div>
      </div>
    </div>
  )
}

function TradeResultCard({ type }: { type: 'Winning' | 'Losing' }) {
  const isWinning = type === 'Winning'
  const borderColor = isWinning ? 'border-green-500' : 'border-red-500'

  return (
    <div className={`bg-gray-800 p-6 rounded-lg border-t-2 ${borderColor} transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110`}>
      <h3 className="text-2xl font-semibold mb-4">{type} Trades</h3>
      <table className="w-full text-lg">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="pb-2">Trade Type</th>
            <th className="pb-2">No. of Trades</th>
            <th className="pb-2">Avg Duration</th>
            <th className="pb-2">Avg Size</th>
            <th className="pb-2">Avg {isWinning ? 'Gain' : 'Loss'}</th>
          </tr>
        </thead>
        <tbody>
          {['Long', 'Short', 'Both'].map((tradeType) => (
            <tr key={tradeType} className="border-t border-gray-700">
              <td className="py-3">{tradeType}</td>
              <td className="py-3">0</td>
              <td className="py-3">0H 0m 0s</td>
              <td className="py-3">$0</td>
              <td className={`py-3 ${isWinning ? 'text-green-400' : 'text-red-400'}`}>+$0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FeeCard({ title }: { title: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <table className="w-full text-lg">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="pb-2">Type</th>
            <th className="pb-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {title === 'Funding Fee' ? (
            <>
              <tr className="border-t border-gray-700">
                <td className="py-3">Funding Received</td>
                <td className="py-3">$0</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">Funding Paid</td>
                <td className="py-3">$0</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">Net Funding Fee</td>
                <td className="py-3">$0</td>
              </tr>
            </>
          ) : (
            <>
              <tr className="border-t border-gray-700">
                <td className="py-3">Maker Rebates Received</td>
                <td className="py-3">$0</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">Market Fees Paid</td>
                <td className="py-3">$0</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">Net Fees</td>
                <td className="py-3 text-red-400">$0</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  )
}