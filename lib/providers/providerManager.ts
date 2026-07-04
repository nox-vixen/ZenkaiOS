import type { AnimeProvider } from "./types";
import { MovieBoxProvider } from "./moviebox";

class ProviderManager {
  private providers: AnimeProvider[] = [];

  constructor() {
    this.providers = [MovieBoxProvider];
  }

  get primary(): AnimeProvider {
    return this.providers[0];
  }

  register(provider: AnimeProvider) {
    this.providers.push(provider);
  }

  all() {
    return this.providers;
  }
}

export const providerManager = new ProviderManager();