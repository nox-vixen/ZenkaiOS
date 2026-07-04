import { Anime, AnimeProvider, Episode, Stream } from "./types";
import { getProviders } from "./registry";

export class ProviderManager {
  private providers: AnimeProvider[];

  constructor() {
    this.providers = getProviders();
  }

  async search(query: string): Promise<Anime[]> {
    const results: Anime[] = [];

    for (const provider of this.providers) {
      try {
        const data = await provider.search(query);
        results.push(...data);
      } catch (err) {
        console.error(`${provider.name} search failed`, err);
      }
    }

    return results;
  }

  async getAnime(id: string): Promise<Anime | null> {
    for (const provider of this.providers) {
      try {
        const anime = await provider.getAnime(id);

        if (anime) return anime;
      } catch {}
    }

    return null;
  }

  async getEpisodes(id: string): Promise<Episode[]> {
    for (const provider of this.providers) {
      try {
        const episodes = await provider.getEpisodes(id);

        if (episodes.length) return episodes;
      } catch {}
    }

    return [];
  }

  async getStreams(
    animeId: string,
    episodeId: string
  ): Promise<Stream[]> {
    for (const provider of this.providers) {
      try {
        const streams = await provider.getStreams(
          animeId,
          episodeId
        );

        if (streams.length) return streams;
      } catch {}
    }

    return [];
  }
}

export const providerManager = new ProviderManager();