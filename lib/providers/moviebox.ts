import type {
  Anime,
  AnimeProvider,
  Episode,
  Stream,
} from "./types";

export const MovieBoxProvider: AnimeProvider = {
  name: "MovieBox",

  async getTrendingAnime(): Promise<Anime[]> {
    return [];
  },

  async getPopularAnime(): Promise<Anime[]> {
    return [];
  },

  async search(query: string): Promise<Anime[]> {
    return [];
  },

  async getAnime(id: string): Promise<Anime | null> {
    return null;
  },

  async getEpisodes(id: string): Promise<Episode[]> {
    return [];
  },

  async getStreams(
    animeId: string,
    episodeId: string
  ): Promise<Stream[]> {
    return [];
  },
};