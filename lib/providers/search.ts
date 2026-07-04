import { Anime } from "./types";
import { getProviders } from "./registry";

export async function searchAnime(query: string): Promise<Anime[]> {
  const providers = getProviders();

  const results = await Promise.all(
    providers.map((provider) => provider.search(query))
  );

  return results.flat();
}