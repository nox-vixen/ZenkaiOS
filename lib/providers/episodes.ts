import { Episode } from "./types";
import { getProviders } from "./registry";

export async function getEpisodes(id: string): Promise<Episode[]> {
  for (const provider of getProviders()) {
    const episodes = await provider.getEpisodes(id);

    if (episodes.length) return episodes;
  }

  return [];
}