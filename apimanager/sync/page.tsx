'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SyncData() {
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000); // Simulate sync process for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCompletedClick = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/api-manager" className="flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2" />
          Back
        </Link>
        <h1 className="text-3xl font-bold mb-8">Sync Data</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32"
            >
              {!isComplete && (
                <motion.div
                  className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              )}
              {isComplete && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Check className="w-16 h-16 text-green-500" />
                </motion.div>
              )}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-xl font-semibold"
            >
              {isComplete ? 'Sync Complete!' : 'Syncing data...'}
            </motion.p>
          </div>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <button
                onClick={handleCompletedClick}
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors"
              >
                Completed like a sigma
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
