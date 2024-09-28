'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const exchanges = [
  { name: 'Binance', logo: '/exchange-logos/binance.png' },
  { name: 'Bybit', logo: '/exchange-logos/bybit.png' },
  { name: 'OKX', logo: '/exchange-logos/okx.png' },
  { name: 'Gate.io', logo: '/exchange-logos/gateio.png' },
  { name: 'Bitget', logo: '/exchange-logos/bitget.png' },
  { name: 'BingX', logo: '/exchange-logos/bingx.png' },
  { name: 'KuCoin', logo: '/exchange-logos/kucoin.png' },
  { name: 'Bitfinex', logo: '/exchange-logos/bitfinex.png' },
  { name: 'Huobi', logo: '/exchange-logos/huobi.png' },
  { name: 'Crypto.com', logo: '/exchange-logos/cryptocom.png' },
]

export default function ApiManager() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedExchange, setSelectedExchange] = useState<string | null>(null)
  const router = useRouter()

  const handleConnect = (exchangeName: string) => {
    router.push(`/apimanager/${exchangeName.toLowerCase()}`)
  }

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
          <Link href="/apimanager" className="block py-2 px-4 text-white bg-gray-700">
            API Manager
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-500 hover:text-white">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold">API Manager</h1>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Add a New Exchange API</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">1</div>
                  <h2 className="text-xl font-semibold">Select an exchange</h2>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">2</div>
                  <span>Enter API details</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">3</div>
                  <span>Sync data</span>
                </div>
              </div>
              <div className="space-y-4">
                {exchanges.map((exchange) => (
                  <div
                    key={exchange.name}
                    className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-600 transition-colors ${
                      selectedExchange === exchange.name ? 'border-2 border-blue-500' : ''
                    }`}
                    onClick={() => setSelectedExchange(exchange.name)}
                  >
                    <div className="flex items-center">
                      <Image src={exchange.logo} alt={`${exchange.name} logo`} width={40} height={40} className="mr-4 rounded-lg" />
                      <span className="font-semibold">{exchange.name}</span>
                    </div>
                    <button
                      onClick={() => handleConnect(exchange.name)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}