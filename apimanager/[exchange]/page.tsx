'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Database } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function ApiDetails() {
  const { exchange } = useParams();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle connection logic
    console.log('Connecting with:', { accountName, apiKey, secretKey });
    // Redirect to the sync page
    router.push('/apimanager/sync');
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 w-64 ${isMenuOpen ? '' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-8">
          <Link href="/" className="flex items-center py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/apimanager" className="flex items-center py-2 px-4 text-white bg-gray-700">
            <Database className="mr-3 h-5 w-5" />
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
            <Link href="/apimanager" className="flex items-center text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="mr-2" />
              Back to API Manager
            </Link>
            <h2 className="text-3xl font-bold mb-8">Enter {exchange} API details</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <form onSubmit={handleConnect}>
                <div className="mb-4">
                  <label htmlFor="accountName" className="block text-sm font-medium text-gray-400 mb-2">
                    Account name
                  </label>
                  <input
                    type="text"
                    id="accountName"
                    className="w-full bg-gray-700 rounded-md px-4 py-2 text-white"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="apiKey" className="block text-sm font-medium text-gray-400 mb-2">
                    API key
                  </label>
                  <input
                    type="text"
                    id="apiKey"
                    className="w-full bg-gray-700 rounded-md px-4 py-2 text-white"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="secretKey" className="block text-sm font-medium text-gray-400 mb-2">
                    Secret key
                  </label>
                  <input
                    type="password"
                    id="secretKey"
                    className="w-full bg-gray-700 rounded-md px-4 py-2 text-white"
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Connect
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
