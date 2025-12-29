// This file defines the core data structure we expect from the Java microservices.

/**
 * Defines the essential data fields for an Album or Track item.
 * This is retrieved from the Music Catalog Service.
 */
// app/types/music.ts

// Define the core structure for any music item (album, track, or artist in a broader sense)
export interface MusicItem {
  id: string;             // Unique identifier (e.g., Spotify ID, custom ID)
  title: string;          // Album or Track Title
  artist: string;         // Main Artist Name
  imageUrl: string;       // URL for the cover art
  releaseDate: string;    // Date string (e.g., "YYYY-MM-DD")
  averageRating: number;  // The calculated rating (e.g., 1.0 to 10.0)
  reviewCount: number;
}

/**
 * Defines a single user rating/review submitted by a user.
 * This is retrieved from the Rating Service.
 */
export interface Review {
  id: string;
  musicId: string; // Link to the MusicItem
  userId: string; // Link to the User
  score: number; // The score given (e.g., 0.5 to 5.0)
  reviewText: string;
  timestamp: string; // When the review was submitted
}

/**
 * Defines a simplified User structure, used when displaying reviews.
 * This is retrieved from the User Service.
 */
export interface User {
  id: string;
  username: string;
  avatarUrl: string;
}


export interface Album {
  album_name: string;
  artist: string;
  release_date: string;
  genre: string;
  label: string;
  producer: string;
  description: string;
  total_length: string;
  cover_image: string;
  playcount: number | null;
  listeners: number | null;
  tags: string[];
  tracks: Track[];
}

// app/types/user.ts

