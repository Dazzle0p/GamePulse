import React, { useState, useEffect, useCallback } from "react";
import {
  Users,
  Trophy,
  Calendar,
  DollarSign,
  BarChart,
  Settings,
  Mail,
  FileText,
  Video,
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  Search,
  Plus,
  Edit,
  Trash,
  ChevronRight,
  Check,
  X,
  ArrowRight,
  Filter,
  ChevronDown,
} from "lucide-react";

// --- Mock API & Data ---
const mockOrganizationData = {
  _id: "1",
  name: "Viper Strike",
  logoUrl: "https://placehold.co/200x200/ff3300/0a0a0a?text=VS",
  bannerUrl: "https://placehold.co/800x200/ff3300/0a0a0a?text=VIPER+STRIKE",
  foundedYear: 2020,
  headquarters: "Cyber City",
  themeColor: "#ff3300",
  founder: {
    _id: "f1",
    name: 'Dr. Alex "Viper" Kane',
    role: "CEO & Founder",
    imageUrl: "https://placehold.co/100x100/ff3300/0a0a0a?text=AK",
  },
  coFounders: [
    {
      _id: "cf1",
      name: 'Riya "Glitch" Sharma',
      role: "COO & Strategy",
      imageUrl: "https://placehold.co/100x100/ff3300/0a0a0a?text=RS",
    },
    {
      _id: "cf2",
      name: 'Kenji "Ronin" Tanaka',
      role: "CTO & Esports Director",
      imageUrl: "https://placehold.co/100x100/ff3300/0a0a0a?text=KT",
    },
  ],
  socialLinks: {
    twitter: "https://twitter.com/viperstrike",
    twitch: "https://twitch.tv/viperstrike",
    youtube: "https://youtube.com/viperstrike",
    instagram: "https://instagram.com/viperstrike",
  },
  sponsors: [
    {
      name: "HyperX",
      logoUrl: "https://placehold.co/100x50/000000/ffffff?text=HyperX",
      website: "https://hyperx.com",
    },
    {
      name: "NVIDIA",
      logoUrl: "https://placehold.co/100x50/000000/76b900?text=NVIDIA",
      website: "https://nvidia.com",
    },
    {
      name: "Red Bull",
      logoUrl: "https://placehold.co/100x50/000000/ff0000?text=Red+Bull",
      website: "https://redbull.com",
    },
  ],
  achievements: [
    {
      title: "ESL Pro League Champions",
      type: "Tournament",
      description: "Won the ESL Pro League Season 15",
      year: 2022,
      relatedGame: "CS:GO",
      position: "1st",
      awardedBy: "ESL",
    },
    {
      title: "Content Creator of the Year",
      type: "Award",
      description: "Best content creation team in esports",
      year: 2021,
      awardedBy: "Esports Awards",
    },
  ],
  participatingTeams: [
    {
      _id: "t1",
      name: "Team Venom",
      game: "Valorant",
      logoUrl: "https://placehold.co/100x100/ff3300/0a0a0a?text=TV",
    },
    {
      _id: "t2",
      name: "Cobra Squad",
      game: "Apex Legends",
      logoUrl: "https://placehold.co/100x100/ff3300/0a0a0a?text=CS",
    },
  ],
  creators: [
    {
      _id: "c1",
      name: "NiteCrawler",
      profileImage: "https://placehold.co/100x100/333333/ffffff?text=NC",
      primaryPlatform: "Twitch",
      followerCount: 125000,
      contentType: "Gaming",
      socialLinks: {
        twitch: "https://twitch.tv/nitecrawler",
        twitter: "https://twitter.com/nitecrawler",
      },
    },
    {
      _id: "c2",
      name: "PixelPioneer",
      profileImage: "https://placehold.co/100x100/333333/ffffff?text=PP",
      primaryPlatform: "YouTube",
      followerCount: 85000,
      contentType: "Tutorials",
      socialLinks: {
        youtube: "https://youtube.com/pixelpioneer",
        twitter: "https://twitter.com/pixelpioneer",
      },
    },
  ],
};

let hasCreatedOrg = false;

const mockApi = {
  getOrganization: async () => {
    await new Promise((res) => setTimeout(res, 500));
    return hasCreatedOrg
      ? JSON.parse(JSON.stringify(mockOrganizationData))
      : null;
  },
  createOrganization: async (name) => {
    await new Promise((res) => setTimeout(res, 500));
    mockOrganizationData.name = name;
    hasCreatedOrg = true;
    return JSON.parse(JSON.stringify(mockOrganizationData));
  },
  updateOrganization: async (data) => {
    await new Promise((res) => setTimeout(res, 300));
    Object.assign(mockOrganizationData, data);
    return { ...mockOrganizationData };
  },
  uploadImage: async (orgId, imageFile, imageType) => {
    await new Promise((res) => setTimeout(res, 300));
    const key = imageType === "logo" ? "logoUrl" : "bannerUrl";
    mockOrganizationData[
      key
    ] = `https://placehold.co/800x200/ff5500/0a0a0a?text=Uploaded!`;
    return { ...mockOrganizationData };
  },
};

// --- Icons ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

const TrashIcon = () => (
  <Icon path="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.006a.75.75 0 01-.749.658h-7.5a.75.75 0 01-.749-.658L5.165 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.9h1.368c1.603 0 2.816 1.336 2.816 2.9zM12 3.25a.75.75 0 01.75.75v.008l.008.008.008.008.008.008.008.008.008.008.008.008.007.008.007.007.007.007.007.007.007.007.006.007.006.006c-.001 0-.001 0-.002 0l-.003.002-.003.002-.004.002-.004.002-.005.002-.005.002-.006.002-.006.002a.75.75 0 01-1.5 0c0-.414.336-.75.75-.75z" />
);

const PlusIcon = () => <Icon path="M12 4.5v15m7.5-7.5h-15" />;

// --- Onboarding Component ---
function CreateOrganizationForm({ onCreate }) {
  const [name, setName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || isCreating) return;
    setIsCreating(true);
    await onCreate(name);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 w-full max-w-md rounded-2xl border border-gray-700 p-8 text-center">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
        <p className="text-gray-400 mb-6">
          Let's get started by creating your organization.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="orgName"
              className="form-label text-left text-gray-400"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="orgName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              placeholder="e.g., Viper Strike"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all"
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Organization"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Reusable Management Components ---
function ImageUploader({ label, currentImageUrl, onImageUpload, imageType }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(currentImageUrl);

  useEffect(() => {
    setPreview(currentImageUrl);
  }, [currentImageUrl]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onImageUpload(file, imageType);
      setFile(null);
    }
  };

  return (
    <div>
      <label className="block text-sm font-bold text-gray-400 mb-2">
        {label}
      </label>
      <img
        src={
          preview ||
          `https://placehold.co/${
            imageType === "logo" ? "200x200" : "400x150"
          }/222222/aaaaaa?text=No+Image`
        }
        alt={`${label} Preview`}
        className={`object-cover rounded-lg bg-gray-800 mb-3 ${
          imageType === "logo" ? "w-32 h-32" : "w-full h-32"
        }`}
      />
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="file"
          name={imageType}
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-orange-400 hover:file:bg-gray-700 cursor-pointer"
        />
        {file && (
          <button
            type="submit"
            className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-xs font-medium"
          >
            Upload
          </button>
        )}
      </form>
    </div>
  );
}

function SocialLinksManager({ socialLinks, onUpdate }) {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!platform || !url) return;

    const newLinks = { ...socialLinks, [platform]: url };
    onUpdate(newLinks);
    setPlatform("");
    setUrl("");
  };

  const handleDelete = (key) => {
    const newLinks = { ...socialLinks };
    delete newLinks[key];
    onUpdate(newLinks);
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "twitch":
        return <Twitch className="w-4 h-4" />;
      case "youtube":
        return <Youtube className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <BarChart className="w-5 h-5 text-orange-500" />
        Social Media Links
      </h3>
      <div className="space-y-3 mb-4">
        {socialLinks && Object.keys(socialLinks).length > 0 ? (
          Object.entries(socialLinks).map(([platform, url]) => (
            <div
              key={platform}
              className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  {getPlatformIcon(platform)}
                </div>
                <div>
                  <p className="font-bold text-orange-400 capitalize">
                    {platform}
                  </p>
                  <p className="text-sm text-gray-400">{url}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(platform)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No social links added yet.</p>
        )}
      </div>

      <form onSubmit={handleAdd} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
            >
              <option value="">Select Platform</option>
              <option value="twitter">Twitter</option>
              <option value="twitch">Twitch</option>
              <option value="youtube">YouTube</option>
              <option value="instagram">Instagram</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium text-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Social Link
        </button>
      </form>
    </div>
  );
}

function PeopleManager({
  title,
  people,
  onUpdate,
  personType,
  singlePerson = false,
  showImages = false,
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) return;
    const newPerson = {
      _id: Date.now().toString(),
      name,
      ...(role && { role }),
      ...(imageUrl && { imageUrl }),
    };
    const newPeople = singlePerson
      ? [newPerson]
      : [...(people || []), newPerson];
    onUpdate(newPeople);
    setName("");
    setRole("");
    setImageUrl("");
  };

  const handleDelete = (id) => {
    const newPeople = singlePerson
      ? []
      : (people || []).filter((p) => p._id !== id);
    onUpdate(newPeople);
  };

  const canAddPerson = !singlePerson || !people || people.length === 0;

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-orange-500" />
        {title}
      </h3>
      <div className="space-y-3 mb-4">
        {people && people.length > 0 ? (
          people.map((person) => (
            <div
              key={person._id}
              className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {showImages && (
                  <img
                    src={
                      person.imageUrl ||
                      "https://placehold.co/40x40/333333/aaaaaa?text=?"
                    }
                    alt={person.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-bold text-orange-400">{person.name}</p>
                  {person.role && (
                    <p className="text-sm text-gray-400">{person.role}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDelete(person._id)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No {personType} added yet.</p>
        )}
      </div>
      {canAddPerson && (
        <form onSubmit={handleAdd} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                {personType} Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`Enter name...`}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
              />
            </div>
            {personType !== "Team" && (
              <div>
                <label className="block text-gray-400 text-sm mb-2">Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g., Streamer"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                />
              </div>
            )}
            {showImages && (
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium text-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add {personType}
          </button>
        </form>
      )}
    </div>
  );
}

// --- Main Dashboard Component ---
export default function OrganizationDashboard() {
  const [organization, setOrganization] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const fetchOrg = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const orgData = await mockApi.getOrganization();
      if (orgData) {
        setOrganization(orgData);
        setNeedsOnboarding(false);
      } else {
        setNeedsOnboarding(true);
      }
    } catch (err) {
      setError("Could not connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrg();
  }, [fetchOrg]);

  const handleCreateOrganization = async (name) => {
    const newOrg = await mockApi.createOrganization(name);
    if (newOrg) {
      setOrganization(newOrg);
      setNeedsOnboarding(false);
    } else {
      alert("Failed to create organization. Please try again.");
    }
  };

  const handleUpdate = async (updatedData) => {
    const currentData = { ...organization, ...updatedData };
    setOrganization(currentData);
    const updatedOrgFromServer = await mockApi.updateOrganization(currentData);
    setOrganization(updatedOrgFromServer);
  };

  const handleImageUpload = async (imageFile, imageType) => {
    if (!organization) return;
    const updatedOrg = await mockApi.uploadImage(
      organization._id,
      imageFile,
      imageType
    );
    if (updatedOrg) {
      setOrganization(updatedOrg);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-black">
        <p className="text-2xl font-bold text-gray-400">Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-black">
        <p className="text-2xl font-bold text-red-500">{error}</p>
      </div>
    );
  }

  if (needsOnboarding) {
    return <CreateOrganizationForm onCreate={handleCreateOrganization} />;
  }

  if (!organization) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">Organization Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10">
              Support Center
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="font-bold">AD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {organization.name} Dashboard
            </h2>
            <p className="text-gray-400">
              Manage your organization, teams, and content creators
            </p>
          </div>

          <div className="flex gap-3">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-2xl border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">
                {organization.participatingTeams?.length || 0}
              </div>
              <div className="text-gray-400 text-sm">Teams</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-2xl border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">
                {organization.creators?.length || 0}
              </div>
              <div className="text-gray-400 text-sm">Creators</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-800 mb-8">
          {["overview", "social", "sponsors", "achievements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium border-b-2 ${
                activeTab === tab
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Banner and Logo */}
        <div className="relative mb-8">
          <img
            src={
              organization.bannerUrl ||
              "https://placehold.co/1200x300/222222/0a0a0a?text=Banner"
            }
            alt="Banner"
            className="w-full h-48 md:h-64 object-cover rounded-xl bg-gray-800"
          />
          <div className="absolute bottom-0 left-6 transform translate-y-1/2 flex items-end gap-4">
            <img
              src={
                organization.logoUrl ||
                "https://placehold.co/128x128/222222/aaaaaa?text=Logo"
              }
              alt="Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-900 bg-gray-800 object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <PeopleManager
                title="Creators"
                people={organization.creators}
                onUpdate={(creators) => handleUpdate({ creators })}
                personType="Creator"
                showImages={true}
              />
              <PeopleManager
                title="Participating Teams"
                people={organization.participatingTeams}
                onUpdate={(participatingTeams) =>
                  handleUpdate({ participatingTeams })
                }
                personType="Team"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-500" />
                  Organization Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      value={organization.name || ""}
                      onChange={(e) => handleUpdate({ name: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Headquarters
                    </label>
                    <input
                      type="text"
                      value={organization.headquarters || ""}
                      onChange={(e) =>
                        handleUpdate({ headquarters: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                      placeholder="e.g., Los Angeles, CA"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Founded Year
                    </label>
                    <input
                      type="number"
                      value={organization.foundedYear || ""}
                      onChange={(e) =>
                        handleUpdate({
                          foundedYear: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Theme Color
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={organization.themeColor || "#ffffff"}
                        onChange={(e) =>
                          handleUpdate({ themeColor: e.target.value })
                        }
                        className="w-10 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={organization.themeColor || ""}
                        onChange={(e) =>
                          handleUpdate({ themeColor: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                        placeholder="#FFFFFF"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Edit className="w-5 h-5 text-orange-500" />
                  Manage Images
                </h3>
                <div className="space-y-6">
                  <ImageUploader
                    label="Logo"
                    currentImageUrl={organization.logoUrl}
                    onImageUpload={handleImageUpload}
                    imageType="logo"
                  />
                  <ImageUploader
                    label="Banner"
                    currentImageUrl={organization.bannerUrl}
                    onImageUpload={handleImageUpload}
                    imageType="banner"
                  />
                </div>
              </div>

              <PeopleManager
                title="Founder"
                people={organization.founder ? [organization.founder] : []}
                onUpdate={(people) =>
                  handleUpdate({ founder: people[0] || null })
                }
                personType="Founder"
                singlePerson={true}
                showImages={true}
              />

              <PeopleManager
                title="Co-Founders"
                people={organization.coFounders}
                onUpdate={(coFounders) => handleUpdate({ coFounders })}
                personType="Co-Founder"
                showImages={true}
              />
            </div>
          </div>
        )}

        {activeTab === "social" && (
          <div className="grid grid-cols-1 gap-8">
            <SocialLinksManager
              socialLinks={organization.socialLinks || {}}
              onUpdate={(socialLinks) => handleUpdate({ socialLinks })}
            />
          </div>
        )}

        {activeTab === "sponsors" && (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {organization.sponsors && organization.sponsors.length > 0 ? (
                organization.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg flex flex-col items-center"
                  >
                    <img
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      className="h-12 object-contain mb-3"
                    />
                    <h4 className="font-bold text-orange-400">
                      {sponsor.name}
                    </h4>
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-orange-400 mt-2"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <DollarSign className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No sponsors added yet.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-orange-500" />
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organization.achievements &&
              organization.achievements.length > 0 ? (
                organization.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-800 p-5 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-orange-400">
                        {achievement.title}
                      </h4>
                      <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full capitalize">
                        {achievement.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{achievement.year}</span>
                      {achievement.awardedBy && (
                        <span>Awarded by: {achievement.awardedBy}</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <Trophy className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No achievements added yet.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Organization Hub</h3>
              <p className="text-gray-400">
                Professional tools for esports organizations
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
            © 2023 Organization Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
