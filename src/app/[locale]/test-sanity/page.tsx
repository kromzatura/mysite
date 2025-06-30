'use client'

import { client } from '@/lib/sanityClient'
import { useEffect, useState } from 'react'

export default function TestSanity() {
  const [status, setStatus] = useState('Connecting...')
  const [data, setData] = useState(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Простой тест подключения - проверяем проект
        const result = await client.fetch('*[0..2]') // Получаем первые 3 документа
        setStatus('✅ Connected to Sanity!')
        setData(result)
      } catch (error) {
        setStatus(`❌ Error: ${error}`)
        console.error('Sanity connection error:', error)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold">{status}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Project Config:</h3>
          <p><strong>Project ID:</strong> {client.config().projectId}</p>
          <p><strong>Dataset:</strong> {client.config().dataset}</p>
          <p><strong>API Version:</strong> {client.config().apiVersion}</p>
          <p><strong>Use CDN:</strong> {client.config().useCdn ? 'Yes' : 'No'}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Data Response:</h3>
          {data ? (
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}
