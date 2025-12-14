// components/music/RatingStars.tsx
// Using Lucide Icons for more reliable star rendering instead of Unicode
import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  rating: number; // THE SCORE IS NOW 0.0 to 10.0
  size?: 'sm' | 'md' | 'lg'; // Visual size of the stars
  showCount?: number; // Optional: Show the total number of reviews
}

const sizeClasses = {
  sm: 'w-4 h-4', // Using Tailwind classes for Lucide icon sizes
  md: 'w-5 h-5',
  lg: 'w-7 h-7',
};

// Size for the numerical display
const numericalSizeClass = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
}


export default function RatingStars({ rating, showCount, size = 'md' }: RatingStarsProps) {
    const starIconClass = sizeClasses[size];
    const numClass = numericalSizeClass[size];
    const finalRating = Math.max(0, Math.min(10, rating));
    
    // --- 1. NORMALIZATION & ROUNDING: Convert 0-10 scale to 0-5 scale, rounded to nearest 0.5 ---
    // Example: 8.1/10 (4.05) rounds to 4.0. 8.5/10 (4.25) rounds to 4.5.
    const normalizedRating = Math.round((finalRating / 2) * 2) / 2; // Rounds to the nearest half (e.g., 4.5, 3.0)
    
    // 2. Calculate Star Components
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = (normalizedRating - fullStars) === 0.5; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

    // --- Star Array Generation ---
    const starComponents = [];

    // Full Stars
    for (let i = 0; i < fullStars; i++) {
        starComponents.push(
            <Star key={`full-${i}`} className={`${starIconClass} fill-yellow-500 text-yellow-500`} />
        );
    }

    // Half Star
    if (hasHalfStar) {
        starComponents.push(
            // Use StarHalf icon from Lucide for clean visual
            <StarHalf key="half" className={`${starIconClass} fill-yellow-500 text-yellow-500`} />
        );
    }

    // Empty Stars
    for (let i = 0; i < emptyStars; i++) {
        starComponents.push(
            // Fill is gray, stroke is a lighter gray
            <Star key={`empty-${i}`} className={`${starIconClass} fill-gray-800 text-gray-500`} />
        );
    }


  return (
    <div className="flex items-center text-yellow-500 font-bold">
      <div className="flex space-x-[2px] mr-2"> {/* Added small spacing between stars and increased gap to numerical score */}
        {starComponents}
      </div>
      
      {/* Numerical Rating Display (Cleaned up alignment and sizing) */}
      <span className={`text-[#8D8CE7] font-semibold ${numClass}`}>
        {finalRating.toFixed(1)} / 10
      </span>
      
      {/* Review Count Display */}
      {showCount !== undefined && (
        <span className={`ml-3 text-gray-400 ${numericalSizeClass['sm']}`}>
          ({showCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}