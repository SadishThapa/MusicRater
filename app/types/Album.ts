import { Document, Schema, model, models } from 'mongoose';

// 1. Define the TypeScript Interface for the Album document
// NOTE: We extend Document for Mongoose features
export interface IAlbum extends Document {
    id: string; // Mongoose creates a unique _id, but we'll map it to 'id' for frontend compatibility
    title: string;
    artist: string;
    releaseDate: Date; 
    imageUrl: string;
    averageRating: number;
    reviewCount: number;
}

// 2. Define the Mongoose Schema
const AlbumSchema = new Schema<IAlbum>({
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    // Type Date is critical for sorting by release date
    releaseDate: { type: Date, required: true },
    imageUrl: { type: String, required: true },
    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
}, {
    // Add virtuals and transformations to the JSON output
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = ret._id.toString(); // Map _id to id for the frontend
            delete ret._id;
            delete ret.__v;
        }
    }
});

// 3. Prevent model re-compilation in Next.js development mode
export const Album = (models.Album || model<IAlbum>('Album', AlbumSchema));