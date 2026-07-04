export interface Anime {
  id: string;
  title: string;
  description?: string;
  poster: string;
  banner?: string;
  type?: string;
  status?: string;
  year?: number;
  rating?: number;
  episodes?: number;
}

export interface Episode {
  id: string;
  number: number;
  title?: string;
}

export interface Stream {
  url: string;
  quality: string;
}

export interface AnimeProvider {
  name: string;

  getTrendingAnime(): Promise<Anime[]>;

  getPopularAnime(): Promise<Anime[]>;

  search(query: string): Promise<Anime[]>;

  getAnime(id: string): Promise<Anime | null>;

  getEpisodes(id: string): Promise<Episode[]>;

  getStreams(
    animeId: string,
    episodeId: string
  ): Promise<Stream[]>;
}