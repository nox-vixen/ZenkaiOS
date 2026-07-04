import { AnimeProvider } from "./types";
import { MovieBoxProvider } from "./moviebox";

const providers: AnimeProvider[] = [
  MovieBoxProvider,
];

export function getProviders(): AnimeProvider[] {
  return providers;
}

export function registerProvider(provider: AnimeProvider) {
  providers.push(provider);
}