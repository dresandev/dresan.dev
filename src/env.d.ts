interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID: string
  readonly SPOTIFY_REFRESH_TOKEN: string
  readonly SPOTIFY_CLIENT_ID: string
  readonly SPOTIFY_CLIENT_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly SPOTIFY_REFRESH_TOKEN: string
  readonly SPOTIFY_CLIENT_ID: string
  readonly SPOTIFY_CLIENT_SECRET: string
}
