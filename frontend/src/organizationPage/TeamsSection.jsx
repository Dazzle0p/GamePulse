import React, { useState } from "react";
import {
  Gamepad,
  Swords,
  Shield,
  Crown,
  Zap,
  Trophy,
  Users,
  Calendar,
  Search,
  Award,
} from "lucide-react";

// Import reusable components
import SectionHeader from "../components/Ui/SectionHeader";
import FilterBar from "../components/Ui/FilterBar";
import Card from "../components/Ui/Card";
import Button from "../components/Ui/Button";
import StatsBanner from "../components/Ui/StatsBanner";
import getTierBadge from "../components/Ui/getTierBadge";
import getGameIcon from "../components/Ui/getGameIcon";
import { CardSpotlight } from "../components/Ui/CardSpotlight";

// Player Card Component using reusable components
const PlayerCard = ({ player }) => {
  return (
    <Card className="overflow-hidden p-0">
      {/* Header with Tier Badge */}
      <div className="relative h-40 bg-gpdark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <div
          className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full ${getTierBadge(
            player.tier
          )} z-20`}
        >
          {player.tier}
        </div>
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-xl font-bold text-white">{player.name}</h3>
          <p className="text-gpred-500 text-sm">{player.realName}</p>
        </div>
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gpgray">Team</p>
          <p className="font-medium text-white">{player.team}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-gpblack p-2 rounded-lg text-center">
            <p className="text-xs text-gpgray">Game</p>
            <p className="font-bold text-sm text-white flex items-center justify-center gap-1">
              {getGameIcon(player.game)}
              {player.game}
            </p>
          </div>
          <div className="bg-gpblack p-2 rounded-lg text-center">
            <p className="text-xs text-gpgray">Earnings</p>
            <p className="font-bold text-sm text-white">{player.earnings}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gpgray">Region: {player.region}</span>
          <span className="text-xs px-2 py-1 bg-gpred-500/20 text-gpred-500 rounded-full">
            MVP: {player.mvp}
          </span>
        </div>

        <Button variant="secondary" className="w-full">
          View Profile
        </Button>
      </div>
    </Card>
  );
};

// Team Section with Game Filter using reusable components
const TeamsSection = ({ organizationData }) => {
  const [selectedGame, setSelectedGame] = useState("Valorant");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique games from teams
  const games = [
    ...[
      ...new Set(organizationData.participatingTeams.map((team) => team.game)),
    ].map((game) => {
      let icon = Gamepad;
      if (game === "Valorant") icon = Shield;
      if (game === "Counter-Strike 2") icon = Swords;
      if (game === "League of Legends") icon = Crown;
      if (game === "BGMI") icon = Gamepad;

      return { value: game, label: game, icon };
    }),
  ];

  // Filter teams based on selected game
  const filteredTeams = organizationData.participatingTeams.filter(
    (team) => team.game === selectedGame
  );

  // Flatten players from all teams with team info
  const allPlayers = organizationData.participatingTeams.flatMap((team) =>
    team.players.map((player) => ({
      ...player,
      team: team.name,
      game: team.game,
      id: Math.random(),
      image: player.profileImage,
      realName: player.name,
      earnings: player.earnings,
      achievements: player.achievements,
      mvp: player.mvp,
      tier: player.tier,
      region: organizationData.headquarters?.split(",")[1]?.trim() || "Global",
      type: player.type,
      social: player.social,
    }))
  );

  // Filter players based on search query
  const filteredPlayers = allPlayers.filter(
    (player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get unique players by game when a game is selected
  const playersByGame = filteredPlayers.filter(
    (player) => player.game === selectedGame
  );

  return (
    <section className="py-20 bg-gpblack">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Teams & Players"
          subtitle={`Elite competitors representing ${organizationData.name}`}
        />

        <FilterBar
          filters={games}
          activeFilter={selectedGame}
          onFilterChange={setSelectedGame}
          placeholder="Search players or teams..."
          onSearch={setSearchQuery}
        />

        {/* Teams Grid */}
        <div className="mb-16">
          {filteredTeams.length > 0 ? (
            <div className="gap-6">
              {filteredTeams.map((team) => (
                <Card key={team._id}>
                  <div className="flex items-center space-x-4 mb-6">
                    {team.logoUrl && (
                      <img
                        src={team.logoUrl}
                        alt={`${team.name} logo`}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-gpred-500 transition-colors">
                        {team.name}
                      </h3>
                      <p className="text-lg text-gpred-500 font-semibold">
                        {team.game}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gpgray">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{team.players.length} Players</span>
                    </div>
                    {team.achievements && (
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4" />
                        <span>{team.achievements} Wins</span>
                      </div>
                    )}
                    {team.establishedYear && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Est. {team.establishedYear}</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gpgray text-lg">
                No teams found matching your criteria.
              </p>
            </div>
          )}
        </div>

        {/* Players Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            {selectedGame === "All" ? "All Players" : `${selectedGame} Roster`}
          </h3>

          {playersByGame.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {playersByGame.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gpgray text-lg">
                No players found matching your criteria.
              </p>
            </div>
          )}
        </div>

        <StatsBanner
          stats={[
            {
              icon: <Trophy className="w-8 h-8" />,
              value: `${organizationData.participatingTeams.reduce(
                (acc, team) => acc + (team.achievements || 0),
                0
              )}+`,
              label: "Tournament Wins",
              color: "text-gpred-500",
            },
            {
              icon: <Users className="w-8 h-8" />,
              value: `${organizationData.participatingTeams.reduce(
                (acc, team) => acc + team.players.length,
                0
              )}+`,
              label: "Professional Players",
              color: "text-gporange-500",
            },
            {
              icon: <Award className="w-8 h-8" />,
              value: `${organizationData.achievements.length}+`,
              label: "Major Achievements",
              color: "text-yellow-500",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default TeamsSection;
