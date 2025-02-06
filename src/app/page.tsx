"use client";

import React, { useState } from "react";
import { Users, Boxes, Activity, Search, Bell, Terminal } from "lucide-react";

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Active Workspaces",
      value: "1,832",
      change: "+8.2%",
      icon: Boxes,
      color: "text-purple-500",
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "+0.1%",
      icon: Activity,
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1117]">
      {/* Top Navigation */}
      <nav className="border-b border-white/[0.08] bg-surface-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-purple-500/10">
                <Terminal className="h-5 w-5 text-purple-500" />
              </div>
              <span className="text-xl font-semibold text-white">
                CloudCode Admin
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-9 pr-4 py-2 bg-surface-hover border border-white/[0.08] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-surface-card border border-white/[0.08] rounded-xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <p className="text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <span className="text-sm text-green-500">
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-surface-hover">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-surface-card border border-white/[0.08] rounded-xl">
            <div className="p-6 border-b border-white/[0.08]">
              <h2 className="text-lg font-semibold text-white">Recent Users</h2>
            </div>
            {/* Add user list here */}
          </div>

          {/* Active Workspaces */}
          <div className="bg-surface-card border border-white/[0.08] rounded-xl">
            <div className="p-6 border-b border-white/[0.08]">
              <h2 className="text-lg font-semibold text-white">
                Active Workspaces
              </h2>
            </div>
            {/* Add workspace list here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
