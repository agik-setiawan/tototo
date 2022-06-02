export interface AnimeModel {
    id: string;
    title?: {
        romaji?: string;
    };
    bannerImage?: string;
    genres?:string[];
    episodes?:number
}