"use client"

import { Home, MapPin, Zap, Clock, FileText, ChevronDown, LogOut, User } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  return (
    <div className="min-h-screen bg-[#e9ecef]">
      {/* Header */}
      <div className="bg-[#2e55cc] text-white">
        {/* Top status bar */}
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-2xl font-bold">CK</div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>AVAILABLE / TOTAL</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-semibold">3</span>
              <span>/</span>
              <span>17</span>
            </div>

            <div className="flex items-center gap-2">
              <span>OCCUPIED</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400 font-semibold">0</span>
            </div>

            <div className="flex items-center gap-2">
              <span>UNAVAILABLE</span>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-400 font-semibold">14</span>
            </div>

            <div className="flex items-center gap-2">
              <span>FAULTY</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-red-400 font-semibold">0</span>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleSubmenu("user")}
                className="flex items-center gap-1 hover:bg-[#1e4bb8] px-2 py-1 rounded"
              >
                <User className="w-5 h-5" />
                <ChevronDown className="w-3 h-3" />
              </button>

              {openSubmenu === "user" && (
                <div className="absolute right-0 top-full mt-1 bg-white text-black rounded-lg shadow-lg py-2 min-w-32 z-50">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <div className="flex items-center gap-8 px-6 py-3 bg-[#1e4bb8] relative">
          <Home className="w-5 h-5" />

          <div className="relative">
            <button
              onClick={() => toggleSubmenu("locations")}
              className="flex items-center gap-2 hover:bg-[#2e55cc] px-2 py-1 rounded"
            >
              <MapPin className="w-4 h-4" />
              <span>LOCATIONS</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {openSubmenu === "locations" && (
              <div className="absolute left-0 top-full mt-1 bg-white text-black rounded-lg shadow-lg py-2 min-w-40 z-50">
                <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">View All</div>
                <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Add New</div>
                <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Manage</div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleSubmenu("chargers")}
              className="flex items-center gap-2 hover:bg-[#2e55cc] px-2 py-1 rounded"
            >
              <Zap className="w-4 h-4" />
              <span>CHARGERS</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {openSubmenu === "chargers" && (
              <div className="absolute left-0 top-full mt-1 bg-white text-black rounded-lg shadow-lg py-2 min-w-40 z-50">
                <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Available</div>
                <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Occupied</div>
                <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Maintenance</div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>SESSIONS</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>AUTHORIZATIONS</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6">
        <h1 className="text-[#2f2f30] text-xl font-medium mb-6">Dashboard</h1>

        {/* Content boxes */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg h-40 shadow-sm border border-[#d8d8d8]"></div>
          <div className="bg-white rounded-lg h-64 shadow-sm border border-[#d8d8d8]"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 right-6">
        <p className="text-[#2f2f30] text-sm">© chargetronix 2025</p>
      </div>
    </div>
  )
}
