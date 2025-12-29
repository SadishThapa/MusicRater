'use client';

import { Album } from '@/app/types/music';
import { Calendar, Clock, Music2, PlayCircle, X } from 'lucide-react'; // Assuming you have lucide-react, or use generic icons
import { useEffect, useState } from 'react';

interface TracklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: Album | null;
}

export default function TracklistModal({ isOpen, onClose, album }: TracklistModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle animation state
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;
  if (!album) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-5xl max-h-[90vh] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Close Button (Mobile/Desktop) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* LEFT SIDE: Album Art & Info */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-gray-800/50 p-8 flex flex-col gap-6 overflow-y-auto">
          <div className="relative aspect-square w-full shadow-2xl rounded-lg overflow-hidden group">
            <img 
              src={album.cover_image} 
              alt={album.album_name}
              className="w-full h-full object-cover"
            />
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <PlayCircle size={64} className="text-white drop-shadow-lg" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-white leading-tight">{album.album_name}</h2>
              <p className="text-xl text-[#8D8CE7] font-medium mt-1">{album.artist}</p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-gray-400">
               <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                 <Calendar size={14} /> {album.release_date.split('-')[0]}
               </span>
               <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                 <Music2 size={14} /> {album.genre}
               </span>
               {album.total_length && (
                 <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                   <Clock size={14} /> {album.total_length}
                 </span>
               )}
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">About</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {album.description}
              </p>
            </div>

            {album.producer && (
              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Production</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {album.producer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: Tracklist */}
        <div className="w-full md:w-3/5 lg:w-2/3 bg-[#121212] flex flex-col">
           <div className="p-6 border-b border-gray-800 bg-gray-900/50">
             <h3 className="text-lg font-semibold text-white">Tracklist</h3>
           </div>
           
           <div className="overflow-y-auto flex-1 p-2 custom-scrollbar">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="text-gray-500 text-xs border-b border-gray-800">
                   <th className="p-3 w-12 text-center">#</th>
                   <th className="p-3">Title</th>
                   <th className="p-3 w-20 text-right"><Clock size={14} className="inline"/></th>
                 </tr>
               </thead>
               <tbody>
                 {album.tracks?.map((track) => (
                   <tr 
                     key={track.track_number} 
                     className="group hover:bg-gray-800/50 transition-colors cursor-pointer rounded-lg"
                   >
                     <td className="p-3 text-center text-gray-500 group-hover:text-white font-mono text-sm">
                       {track.track_number}
                     </td>
                     <td className="p-3 text-gray-300 group-hover:text-white font-medium text-sm">
                       {track.title}
                     </td>
                     <td className="p-3 text-right text-gray-500 font-mono text-sm">
                       {track.duration}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           {/* Footer / Label Info */}
           <div className="p-4 border-t border-gray-800 text-xs text-center text-gray-600">
             {album.label}
           </div>
        </div>
      </div>
    </div>
  );
}