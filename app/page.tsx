// app/page.tsx (Assuming the Home Screen is at the root)
import { MusicItem } from "@/app/types/music";
import AlbumCard from "@/components/music/AlbumCard";

// --- MOCK DATA ---
const mockRecentAlbums: MusicItem[] = [
  {
    id: "1",
    title: "After Hours",
    artist: "The Weeknd",
    averageRating: 9.0,
    reviewCount: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
    releaseDate: "2020-03-20",
  },
  {
    id: "4",
    title: "Currents",
    artist: "Tame Impala",
    averageRating: 8.5,
    reviewCount: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png",
    releaseDate: "2015-07-17",
  },
  {
    id: "3",
    title: "Lover",
    artist: "Taylor Swift",
    averageRating: 7.0,
    reviewCount: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
    releaseDate: "2019-08-23",
  },
  {
    id: "2",
    title: "Melodrama",
    artist: "Lorde",
    averageRating: 9.5,
    reviewCount: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png",
    releaseDate: "2017-06-16",
  },
  {
    id: "5",
    title: "DAMN.",
    artist: "Kendrick Lamar",
    averageRating: 9.2,
    reviewCount: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpUz1Px8iDU7JYMm7edHuawZMpsFMyKd5vDJDa_gkCdc8rJIwWxQ613Jw-Mg&s",
    releaseDate: "2017-04-14",
  },
  {
    id: "6",
    title: "Punisher",
    artist: "Phoebe Bridgers",
    averageRating: 8.8,
    reviewCount: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Phoebe_Bridgers_Punisher_%282020%29.png",
    releaseDate: "2020-06-18",
  },
];

// New Mock Data for Hot Albums (Could be sorted by high review count/average score)
const mockHotAlbums: MusicItem[] = [
  {
    id: "7",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    averageRating: 9.8,
    reviewCount: 500,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    releaseDate: "1973-03-01",
  },
  {
    id: "8",
    title: "Thriller",
    artist: "Michael Jackson",
    averageRating: 9.4,
    reviewCount: 350,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/pt/3/30/Michael_Jackson_-_Thriller.jpg",
    releaseDate: "1982-11-30",
  },
  {
    id: "9",
    title: "Abbey Road",
    artist: "The Beatles",
    averageRating: 9.7,
    reviewCount: 420,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
    releaseDate: "1969-09-26",
  },
  {
    id: "10",
    title: "Lemonade",
    artist: "Beyoncé",
    averageRating: 9.6,
    reviewCount: 310,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png",
    releaseDate: "2016-04-23",
  },
];

// --- REUSABLE ALBUM SECTION COMPONENT ---
interface AlbumSectionProps {
  albums: MusicItem[];
  title: string;
}

// A reusable component for rendering any list of albums
const AlbumSection = ({ albums, title }: AlbumSectionProps) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-white border-b border-gray-700 pb-2">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  </div>
);

export default function HomePage() {
  return (
    // CHANGE: Removed `pt-12` since clearance is handled in layout.
    <div className="space-y-16 max-w-7xl mx-auto">
      {/* 1. New: Hero/Welcome Section */}
      <div className="relative bg-gray-900 p-12 rounded-xl overflow-hidden shadow-xl border border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A47A3]/30 to-gray-800/30"></div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-6xl font-extrabold text-white tracking-tight">
            Discover Great Music
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
            Rate, review, and track your favorite albums. See what the community
            is listening to and reviewing right now.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#8D8CE7] text-white font-semibold rounded-lg shadow-lg hover:bg-[#6A68C3] transition duration-300">
            Start Exploring
          </button>
        </div>
      </div>

      {/* 2. Hot Albums Section (New) */}
      <div className="pt-4">
        <AlbumSection albums={mockHotAlbums} title="Community Hot Picks" />
      </div>

      {/* 3. Recently Added Section (Adapted) */}
      <div className="pt-4">
        <AlbumSection
          albums={mockRecentAlbums}
          title="New Releases & Recent Activity"
        />
      </div>
    </div>
  );
}
