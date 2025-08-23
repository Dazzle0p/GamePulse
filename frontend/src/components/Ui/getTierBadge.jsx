const getTierBadge = (tier) => {
  const styles = {
    "S-Tier": "bg-gradient-to-r from-yellow-600 to-amber-500",
    Elite: "bg-gradient-to-r from-blue-600 to-indigo-500",
    "A-Tier": "bg-gradient-to-r from-purple-600 to-indigo-500",
    "B-Tier": "bg-gradient-to-r from-green-600 to-emerald-500",
  };
  return styles[tier] || "bg-gray-600";
};
export default getTierBadge;
