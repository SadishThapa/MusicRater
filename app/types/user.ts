// app/types/user.ts

/**
 * Defines the structure for a user's profile data.
 */
export interface UserProfile {
  id: string;
  username: string;
  joinDate: string;        // Date string (e.g., "YYYY-MM-DD")
  totalRatings: number;    // Count of reviews/ratings submitted
  averageScore: number;    // User's average rating given to albums (e.g., 1.0 to 10.0)
  bio: string;             // User biography/description
}