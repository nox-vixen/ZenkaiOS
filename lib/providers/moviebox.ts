import { Provider, SearchResult, Episode, Stream } from "./types";

export const MovieBoxProvider: Provider = {
  id: "moviebox",
  name: "MovieBox",

  async search(query: string): Promise<SearchResult[]> {
    // TODO:
    // Later this will call our MovieBox backend API.
    return [];
  },

  async details(id: string): Promise<SearchResult | null> {
    // TODO
    return null;
  },

  async episodes(id: string): Promise<Episode[]> {
    // TODO
    return [];
  },

  async streams(
    id: string,
    season?: number,
    episode?: number,
  ): Promise<Stream[]> {
    // TODO
    return [];
  },
};