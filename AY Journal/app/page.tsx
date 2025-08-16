'use client'

import { useState } from 'react'
import { Calendar, Activity, Brain, Heart, Sun, Moon, Wind, Droplets } from 'lucide-react'
import JournalEntry from '@/components/JournalEntry'
import Dashboard from '@/components/Dashboard'
import SeasonalInsights from '@/components/SeasonalInsights'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'journal' && <JournalEntry />}
        {activeTab === 'insights' && <SeasonalInsights />}
      </main>
    </div>
  )
} 