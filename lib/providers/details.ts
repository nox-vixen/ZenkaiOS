import { Anime } from "./types";
import { getProviders } from "./registry";

export async function getAnime(id: string): Promise<Anime | null> {
  for (const provider of getProviders()) {
    const anime = await provider.getAnime(id);

    if (anime) return anime;
  }

  return null;
}