// app/page.tsx
import AlbumCard from '@/components/music/AlbumCard';
import { MusicItem } from '@/types/music';

// Mock data now uses the MusicItem interface for type safety
const trendingAlbums: MusicItem[] = [
  { id: '1', title: "After Hours", artist: "The Weeknd", rating: 4.6, reviewCount: 5200, imageUrl: "https://via.placeholder.com/300/404E8A/FFFFFF?text=Album+1" },
  { id: '2', title: "Good Kid, M.A.A.D City", artist: "Kendrick Lamar", rating: 4.8, reviewCount: 8100, imageUrl: "https://via.placeholder.com/300/5E8A40/FFFFFF?text=Album+2" },
  { id: '3', title: "Lover", artist: "Taylor Swift", rating: 4.2, reviewCount: 6500, imageUrl: "https://via.placeholder.com/300/8A406F/FFFFFF?text=Album+3" },
  { id: '4', title: "Currents", artist: "Tame Impala", rating: 4.5, reviewCount: 4100, imageUrl: "https://via.placeholder.com/300/8A8A40/FFFFFF?text=Album+4" },
  { id: '5', title: "Dark Side of the Moon", artist: "Pink Floyd", rating: 4.9, reviewCount: 9500, imageUrl: "https://via.placeholder.com/300/404040/FFFFFF?text=Album+5" },
  { id: '6', title: "Lemonade", artist: "Beyoncé", rating: 4.7, reviewCount: 7800, imageUrl: "https://via.placeholder.com/300/8A4040/FFFFFF?text=Album+6" },
];

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8 text-purple-300">
        🔥 Trending Now
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {trendingAlbums.map((album) => (
          <AlbumCard 
            key={album.id} 
            album={album} 
          />
        ))}
      </div>
      
      <p className="text-center text-gray-500 mt-12">
        **This data is hardcoded. Next, we will connect to your Java Spring Boot Catalog Service!**
      </p>
    </section>
  );
}