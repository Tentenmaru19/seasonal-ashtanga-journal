'use client'

import { Activity, BookOpen, TrendingUp } from 'lucide-react'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-earth-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary-600">
              Seasonal Ashtanga Journal
            </h1>
          </div>
          
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-earth-600 hover:text-earth-900 hover:bg-earth-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
} 