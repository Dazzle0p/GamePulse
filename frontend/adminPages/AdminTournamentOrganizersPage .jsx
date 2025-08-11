import React, { useState } from "react";
import {
  Calendar,
  Users,
  DollarSign,
  Trophy,
  BarChart,
  Settings,
  Mail,
  FileText,
  Video,
  Twitch,
  Youtube,
  ChevronDown,
  Search,
  Filter,
  Plus,
  Edit,
  Trash,
  ArrowRight,
  ChevronRight,
  Check,
  X,
  Twitter,
  Instagram,
} from "lucide-react";

const AdminTournamentOrganizersPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock data
  const tournaments = {
    upcoming: [
      {
        id: 1,
        name: "Valorant Champions Tour - India Qualifiers",
        game: "Valorant",
        date: "2023-11-15 to 2023-11-18",
        status: "Registration Open",
        registrations: 42,
        maxTeams: 64,
        prizePool: "$10,000",
        platform: "PC",
      },
      {
        id: 2,
        name: "BGMI All Stars Invitational",
        game: "Battlegrounds Mobile India",
        date: "2023-12-01 to 2023-12-03",
        status: "Preparation",
        registrations: 16,
        maxTeams: 32,
        prizePool: "$5,000",
        platform: "Mobile",
      },
    ],
    past: [
      {
        id: 3,
        name: "CS:GO Mumbai Masters",
        game: "Counter-Strike 2",
        date: "2023-09-20",
        status: "Completed",
        registrations: 32,
        maxTeams: 32,
        prizePool: "$7,500",
        platform: "PC",
        winner: "Team Enigma",
      },
    ],
    live: [
      {
        id: 4,
        name: "Free Fire City Showdown",
        game: "Free Fire",
        date: "2023-10-25 to 2023-10-29",
        status: "Live - Day 3",
        registrations: 48,
        maxTeams: 48,
        prizePool: "$8,000",
        platform: "Mobile",
        viewers: "25K",
      },
    ],
  };

  const registrations = [
    {
      id: 1,
      team: "Team Phoenix",
      captain: "Rahul Sharma",
      registered: "2023-10-10",
      status: "Confirmed",
      paid: true,
    },
    {
      id: 2,
      team: "Delta Esports",
      captain: "Priya Patel",
      registered: "2023-10-11",
      status: "Confirmed",
      paid: true,
    },
    {
      id: 3,
      team: "Mumbai Warriors",
      captain: "Vikram Singh",
      registered: "2023-10-12",
      status: "Pending",
      paid: false,
    },
    {
      id: 4,
      team: "Bengaluru Titans",
      captain: "Arjun Kumar",
      registered: "2023-10-13",
      status: "Confirmed",
      paid: true,
    },
    {
      id: 5,
      team: "Delhi Dragons",
      captain: "Neha Gupta",
      registered: "2023-10-14",
      status: "Waitlisted",
      paid: false,
    },
  ];

  const stats = [
    {
      value: "28",
      label: "Tournaments Hosted",
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "5.2K",
      label: "Teams Registered",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "$350K",
      label: "Total Prize Pools",
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "92%",
      label: "Satisfaction Rate",
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">Tournament Organizers Hub</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10">
              Support Center
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="font-bold">RS</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Organizer Dashboard</h2>
            <p className="text-gray-400">
              Manage tournaments, registrations, and event operations
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Tournament
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tournament List */}
          <div className="lg:col-span-2">
            <div className="flex border-b border-gray-800 mb-6">
              {["upcoming", "live", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium border-b-2 ${
                    activeTab === tab
                      ? "border-orange-500 text-orange-400"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Tournaments
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {tournaments[activeTab].map((tournament) => (
                <div
                  key={tournament.id}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border ${
                    tournament.status.includes("Live")
                      ? "border-orange-500 shadow-orange-500/10"
                      : "border-gray-700 hover:border-orange-500"
                  } overflow-hidden transition-all cursor-pointer`}
                  onClick={() => setSelectedTournament(tournament)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {tournament.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> {tournament.date}
                          </span>
                          <span>{tournament.game}</span>
                          <span>{tournament.platform}</span>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          tournament.status.includes("Open")
                            ? "bg-green-500/10 text-green-400"
                            : tournament.status.includes("Live")
                            ? "bg-orange-500/10 text-orange-400"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {tournament.status}
                      </span>
                    </div>

                    <div className="flex justify-between mt-6">
                      <div>
                        <div className="text-gray-400 text-sm">
                          Registrations
                        </div>
                        <div className="font-bold">
                          {tournament.registrations}/{tournament.maxTeams}
                        </div>
                        <div className="w-32 h-2 bg-gray-700 rounded-full mt-1">
                          <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{
                              width: `${
                                (tournament.registrations /
                                  tournament.maxTeams) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-gray-400 text-sm">Prize Pool</div>
                        <div className="font-bold text-orange-400">
                          {tournament.prizePool}
                        </div>
                      </div>
                    </div>

                    {activeTab === "past" && (
                      <div className="mt-4">
                        <div className="text-gray-400 text-sm">Winner</div>
                        <div className="font-bold">{tournament.winner}</div>
                      </div>
                    )}

                    {activeTab === "live" && (
                      <div className="mt-4">
                        <div className="text-gray-400 text-sm">
                          Live Viewers
                        </div>
                        <div className="font-bold">{tournament.viewers}</div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-800 p-4 flex justify-end gap-2">
                    <button className="px-3 py-1.5 border border-gray-700 rounded-lg hover:bg-gray-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-1.5 border border-gray-700 rounded-lg hover:bg-gray-700">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {tournaments[activeTab].length === 0 && (
                <div className="text-center py-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                  <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
                    <Calendar className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    No tournaments found
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Create your first tournament to get started
                  </p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium"
                  >
                    Create Tournament
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Selected Tournament Details */}
            {selectedTournament ? (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">
                    {selectedTournament.name}
                  </h3>
                  <button onClick={() => setSelectedTournament(null)}>
                    <X className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-sm">Game</div>
                    <div className="font-medium">{selectedTournament.game}</div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-sm">Dates</div>
                    <div className="font-medium">{selectedTournament.date}</div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-sm">Platform</div>
                    <div className="font-medium">
                      {selectedTournament.platform}
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-sm">Status</div>
                    <div className="font-medium">
                      {selectedTournament.status}
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-sm">Prize Pool</div>
                    <div className="font-medium text-orange-400">
                      {selectedTournament.prizePool}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="font-bold mb-3">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-700 flex flex-col items-center">
                        <Mail className="w-5 h-5 mb-1" />
                        <span className="text-sm">Email Teams</span>
                      </button>
                      <button className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-700 flex flex-col items-center">
                        <FileText className="w-5 h-5 mb-1" />
                        <span className="text-sm">Generate Rules</span>
                      </button>
                      <button className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-700 flex flex-col items-center">
                        <Video className="w-5 h-5 mb-1" />
                        <span className="text-sm">Broadcast Setup</span>
                      </button>
                      <button className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-700 flex flex-col items-center">
                        <Settings className="w-5 h-5 mb-1" />
                        <span className="text-sm">Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">Organizer Resources</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-700"
                  >
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span>Tournament Rule Templates</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-700"
                  >
                    <Video className="w-5 h-5 text-purple-400" />
                    <span>Broadcasting Guide</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-700"
                  >
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span>Prize Distribution Best Practices</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-700"
                  >
                    <BarChart className="w-5 h-5 text-yellow-400" />
                    <span>Analytics & Reporting Tools</span>
                  </a>
                </div>
              </div>
            )}

            {/* Registration Management */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Registrations</h3>
                <div className="text-sm text-gray-400">42/64 teams</div>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search teams..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="overflow-auto max-h-96">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                      <th className="pb-2">Team</th>
                      <th className="pb-2">Captain</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr
                        key={reg.id}
                        className="border-b border-gray-800 hover:bg-gray-800/30"
                      >
                        <td className="py-3 font-medium">{reg.team}</td>
                        <td className="py-3 text-sm text-gray-400">
                          {reg.captain}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              reg.status === "Confirmed"
                                ? "bg-green-500/10 text-green-400"
                                : reg.status === "Pending"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-gray-700 text-gray-300"
                            }`}
                          >
                            {reg.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-gray-700">
                            {reg.paid ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <DollarSign className="w-4 h-4 text-yellow-400" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button className="w-full mt-4 py-2.5 border border-orange-500 text-orange-400 rounded-lg font-medium hover:bg-orange-500/10 flex items-center justify-center gap-2">
                View All Registrations <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Tournament Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full max-w-2xl rounded-2xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">Create New Tournament</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 rounded-lg hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Tournament Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Valorant Champions Tour"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Game</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Valorant</option>
                      <option>Battlegrounds Mobile India (BGMI)</option>
                      <option>Counter-Strike 2</option>
                      <option>Free Fire</option>
                      <option>League of Legends</option>
                      <option>Dota 2</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Platform</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700">
                      PC
                    </button>
                    <button className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700">
                      Mobile
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Prize Pool ($)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 5000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Describe your tournament..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium">
                  Create Tournament
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Tournament Hub</h3>
              <p className="text-gray-400">
                Professional tools for esports tournament organizers
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500">
                  <Twitch className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2023 Tournament Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminTournamentOrganizersPage;
