import { Stream } from "./types";
import { getProviders } from "./registry";

export async function getStreams(
  animeId: string,
  episodeId: string
): Promise<Stream[]> {
  for (const provider of getProviders()) {
    const streams = await provider.getStreams(
      animeId,
      episodeId
    );

    if (streams.length) return streams;
  }

  return [];
}