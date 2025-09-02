"use client"

import {
  Home,
  MapPin,
  Zap,
  Clock,
  FileText,
  ChevronDown,
  ChevronRight,
  LogOut,
  User,
  Plus,
  Filter,
  Settings,
  MoreVertical,
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ViewManufactures() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set())
  const [openSettingsMenu, setOpenSettingsMenu] = useState<number | null>(null)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  const toggleRowExpansion = (rowIndex: number) => {
    const newExpandedRows = new Set(expandedRows)
    if (newExpandedRows.has(rowIndex)) {
      newExpandedRows.delete(rowIndex)
    } else {
      newExpandedRows.add(rowIndex)
    }
    setExpandedRows(newExpandedRows)
  }

  const toggleSettingsMenu = (rowIndex: number) => {
    setOpenSettingsMenu(openSettingsMenu === rowIndex ? null : rowIndex)
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
              <span>TOTAL</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-semibold">50</span>
            </div>

            <div className="flex items-center gap-2">
              <span>OCCUPIED</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400 font-semibold">50</span>
            </div>

            <div className="flex items-center gap-2">
              <span>UNAVAILABLE</span>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-400 font-semibold">50</span>
            </div>

            <div className="flex items-center gap-2">
              <span>FAULTY</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-red-400 font-semibold">50</span>
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

          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>CHARGERS</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>SESSIONS</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>REPORTS</span>
          </div>
          <div className="flex items-center gap-2">
            <span>$</span>
            <span>PRICES</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[#2f2f30] text-xl font-medium">View Manufactures</h1>
          <div className="flex items-center gap-2">
            <button className="bg-[#2e55cc] text-white p-2 rounded hover:bg-[#1e4bb8]">
              <Plus className="w-4 h-4" />
            </button>
            <button className="text-gray-600 p-2 hover:bg-gray-100 rounded">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Data table */}
        <div className="bg-white rounded-lg shadow-sm border border-[#d8d8d8] overflow-hidden">
          {/* Table header - first section */}
          <div className="bg-[#2e55cc] text-white">
            <div className="grid grid-cols-7 gap-4 px-6 py-3 text-sm font-medium">
              <div>SITE NAME</div>
              <div>ADDRESS</div>
              <div>PRICE PLAN DC</div>
              <div>PRICE PLAN AC</div>
              <div>SITE ACCOUNT</div>
              <div>TIMEZONE</div>
              <div>CUSTOMER NAME</div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="grid grid-cols-7 gap-4 px-6 py-4 text-sm items-center">
              <div className="flex items-center gap-2">
                <button onClick={() => toggleRowExpansion(0)} className="text-gray-400 hover:text-gray-600">
                  {expandedRows.has(0) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                <span>dummy test site</span>
              </div>
              <div>ttftfgfg</div>
              <div>--</div>
              <div>AC-1</div>
              <div>accnt1</div>
              <div>UK</div>
              <div className="flex items-center justify-between">
                <span>test comp name</span>
                <div className="flex items-center gap-1 relative">
                  <button onClick={() => toggleSettingsMenu(0)} className="text-gray-400 hover:text-gray-600">
                    <Settings className="w-4 h-4" />
                  </button>

                  {openSettingsMenu === 0 && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48 z-50">
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">QR code</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Soft Reset</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Hard Reset</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Configuration</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Remote Start</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Remote End</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Get Diagnostics</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Trigger Status Update</div>
                      <div className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Firmware</div>
                    </div>
                  )}

                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {expandedRows.has(0) && (
              <>
                {/* Table header - second section */}
                <div className="bg-[#2e55cc] text-white">
                  <div className="grid grid-cols-7 gap-4 px-6 py-3 text-sm font-medium">
                    <div>UTILITY NUMBER</div>
                    <div>METER NUMBER</div>
                    <div>SERVICE CAPACITY</div>
                    <div>UTILITY</div>
                    <div>COORDINATES</div>
                    <div>STATE</div>
                    <div>POSTAL CODE</div>
                  </div>
                </div>

                {/* Table row - second section */}
                <div>
                  <div className="grid grid-cols-7 gap-4 px-6 py-4 text-sm">
                    <div>--</div>
                    <div>66565667576</div>
                    <div>--</div>
                    <div>--</div>
                    <div>
                      <div>Lat:12</div>
                      <div>Long:10</div>
                    </div>
                    <div>MH</div>
                    <div>67576</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-2 mt-6">
          <span className="text-gray-600 text-sm">Previous</span>
          <button className="bg-[#2e55cc] text-white w-8 h-8 rounded text-sm">1</button>
          <button className="text-gray-600 hover:bg-gray-100 w-8 h-8 rounded text-sm">2</button>
          <button className="text-gray-600 hover:bg-gray-100 w-8 h-8 rounded text-sm">3</button>
          <span className="text-gray-600 text-sm">Next</span>
        </div>

        {/* Status legend */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-[#d8d8d8] p-4">
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-blue-500"></div>
              <span>FINISHING</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-black"></div>
              <span>RESERVED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-cyan-500"></div>
              <span>PREPARING</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-orange-500"></div>
              <span>SUSPENDED EVSE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-gray-400"></div>
              <span>UNAVAILABLE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-red-500"></div>
              <span>FAULTY</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-yellow-500"></div>
              <span>CHARGING</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-green-500"></div>
              <span>AVAILABLE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 right-6">
        <p className="text-[#2f2f30] text-sm">© chargetronix 2025</p>
      </div>
    </div>
  )
}
