// app/music/[id]/page.tsx
import { Album } from '@/app/types/music';
import { ArrowLeft, Calendar, Clock, Music2, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getAlbum(id: string): Promise<Album | null> {
  // Logic remains the same - simulating backend fetch
  // TIP: When connecting Python, use: 
  // const res = await fetch(`${BACKEND_URL}/albums/${id}`, { next: { revalidate: 3600 } });
  // return res.json();
  if (id === '1') {
      return {
        album_name: "After Hours",
        artist: "The Weeknd",
        release_date: "2020-03-20",
        genre: "R&B",
        label: "XO, Republic",
        description: "After Hours is the fourth studio album by Canadian singer The Weeknd.",
        total_length: "56:19",
        cover_image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
        tracks: [
            { track_number: 1, title: "Alone Again", duration: "4:10" },
            { track_number: 2, title: "Too Late", duration: "3:59" },
            { track_number: 3, title: "Hardest To Love", duration: "3:31" },
        ]
      } as Album;
  }


  return {
    album_name: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    release_date: "2015-03-15",
    genre: "Hip Hop/Rap",
    description: "To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. The album explores themes of black identity, racism, and personal growth, featuring a blend of jazz, funk, and spoken word elements.",
    total_length: "76:19",
    cover_image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/1000x1000bb.jpg",
    tracks: [
        { track_number: 1, title: "Wesley's Theory", duration: "5:28" },
        { track_number: 2, title: "For Free? (interlude)", duration: "2:10" },
        { track_number: 3, title: "King Kunta", duration: "3:54" },
        { track_number: 4, title: "Institutionalized", duration: "4:31" },
        { track_number: 5, title: "These Walls", duration: "1:47" },
        { track_number: 6, title: "u", duration: "4:28" },
        { track_number: 7, title: "Alright", duration: "3:39" },
        { track_number: 8, title: "For Sale? - Interlude", duration: "4:51" },
        { track_number: 9, title: "Momma", duration: "4:43" },
        { track_number: 10, title: "Hood Politics", duration: "4:52" },
        { track_number: 11, title: "How Much a Dollar Cost", duration: "4:21" },
        { track_number: 12, title: "Complexion (A Zulu Love)", duration: "4:23" },
        { track_number: 13, title: "The Blacker the Berry", duration: "5:28" },
        { track_number: 14, title: "You Ain't Gotta Lie (Momma Said)", duration: "4:01" },
        { track_number: 15, title: "i", duration: "5:36" },
        { track_number: 16, title: "Mortal Man", duration: "12:07" }
    ]
  } as Album;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AlbumDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const album = await getAlbum(id);

  if (!album) return notFound();

  return (
    <div className="min-h-screen bg-transparent text-white p-4 md:p-8 pt-20">
      <div className="max-w-7xl mx-auto mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-[#8D8CE7] transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Library
        </Link>
      </div>

      <div className="max-w-7xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* LEFT SIDE: Album Art & Info */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-white/5 p-8 flex flex-col gap-6 border-r border-gray-800">
          <div className="relative aspect-square w-full shadow-2xl rounded-xl overflow-hidden group">
            <img 
              src={album.cover_image} 
              alt={album.album_name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <PlayCircle size={80} className="text-[#8D8CE7] drop-shadow-2xl" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{album.album_name}</h1>
              <p className="text-xl text-[#8D8CE7] font-medium">{album.artist}</p>
            </div>

            <div className="flex flex-wrap gap-2">
               <Badge icon={<Calendar size={14} />} text={album.release_date.split('-')[0]} />
               <Badge icon={<Music2 size={14} />} text={album.genre} />
               {album.total_length && <Badge icon={<Clock size={14} />} text={album.total_length} />}
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-xs text-gray-500 uppercase font-bold tracking-[0.2em] mb-3">About the Album</h3>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "{album.description}"
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Tracklist */}
        <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col">
            <div className="p-8 border-b border-gray-800 bg-black/10">
                 <h2 className="text-2xl font-bold text-white">Tracklist</h2>
            </div>
            
            <div className="flex-1 p-2 md:p-6">
              {album.tracks && album.tracks.length > 0 ? (
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-500 text-xs uppercase tracking-widest border-b border-gray-800">
                        <th className="p-4 w-12 text-center">#</th>
                        <th className="p-4">Title</th>
                        <th className="p-4 w-20 text-right"><Clock size={16} className="ml-auto"/></th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {album.tracks.map((track) => (
                        <tr 
                          key={track.track_number} 
                          className="group hover:bg-white/5 transition-all cursor-pointer"
                        >
                          <td className="p-4 text-center text-gray-600 group-hover:text-[#8D8CE7] font-mono">
                            {track.track_number}
                          </td>
                          <td className="p-4 text-gray-300 group-hover:text-white font-medium">
                            {track.title}
                          </td>
                          <td className="p-4 text-right text-gray-500 font-mono">
                            {track.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              ) : (
                 <div className="p-20 text-center text-gray-600">No tracks found.</div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for the Metadata tags
function Badge({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <span className="flex items-center gap-2 bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700/50 text-xs font-medium">
      {icon} {text}
    </span>
  );
}