// components/music/AlbumCard.tsx (Revised for better visual layout)
import { MusicItem } from '@/app/types/music';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import RatingStars from './RatingStars';

interface AlbumCardProps {
  album: MusicItem;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  // Extract the release year for display
  const releaseYear = album.releaseDate ? new Date(album.releaseDate).getFullYear() : 'N/A';

  return (
    <Link 
      href={`/music/${album.id}`}
      // Refined hover effect for clarity and style
      className="bg-[#1E1E1E] rounded-xl shadow-xl overflow-hidden block relative 
                 hover:shadow-lg hover:shadow-[#4A47A3]/50 hover:bg-[#2A2A2A] transition duration-300 group"
    >
      
      {/* Album Artwork - Aspect Ratio and Image */}
      <div className="relative w-full aspect-square">
        <Image 
          src={album.imageUrl} 
          alt={`${album.title} by ${album.artist} cover art`} 
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition duration-300 group-hover:scale-105" // Subtle zoom on hover
        />
      </div>

      <div className="p-4">
        {/* Title and Artist */}
        {/* Ensures truncate works well and separates title/artist clearly */}
        <h3 className="text-base font-semibold truncate text-white leading-tight mb-0">{album.title}</h3>
        <p className="text-sm text-gray-400 mb-2 truncate">{album.artist}</p>
        
        {/* Rating and Metadata Container (Clean, two-line approach) */}
        
        {/* 1. Star Rating */}
        <div className="mb-2">
            {/* The RatingStars component must handle the display of both stars and the score (e.g., 8.1 / 10) */}
            <RatingStars rating={album.averageRating} size='sm' />
        </div>

        {/* 2. Metadata (Review Count and Year) */}
        <div className="flex justify-between items-center text-xs text-gray-500 pt-1 border-t border-gray-700/50">
            {/* Release Year */}
            <div className="flex items-center">
                <Calendar size={12} className="mr-1 text-gray-600" />
                {releaseYear}
            </div>

            {/* Review Count */}
            <span className="text-gray-500">
                {album.reviewCount.toLocaleString()} ratings
            </span>
        </div>
      </div>
    </Link>
  );
}