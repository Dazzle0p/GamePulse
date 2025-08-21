import { Calendar, ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
const FeaturedTournament = () => {
  const upcomingEvents = [
    {
      name: "Skyesports Championship",
      date: "Dec 15",
      prize: "₹10L",
      game: "Valorant",
    },
    { name: "BGMI Masters", date: "Jan 5", prize: "₹15L", game: "BGMI" },
    { name: "Free Fire Cup", date: "Dec 20", prize: "$50K", game: "Free Fire" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Featured Tournaments</h2>
          <p className="text-gpgray">
            Don't miss these exciting upcoming esports events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.name}
              className="bg-gpdark border border-gporange-300/20 rounded-xl p-6 text-left hover:border-gporange-300/50 transition-all"
            >
              <span className="text-xs uppercase border border-gporange-300/30 px-3 py-1 rounded-full mb-4 inline-block text-gporange-300">
                {event.game}
              </span>
              <h3 className="font-semibold text-lg mb-2">{event.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gpgray flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {event.date}
                </span>
                <span className="font-bold text-gporange-300">
                  {event.prize}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link to="/esports">
          <button className="mt-8 px-6 py-3 border border-gporange-300 rounded-lg flex items-center gap-2 mx-auto hover:bg-gporange-300/10 transition-colors">
            View All Events <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTournament;
