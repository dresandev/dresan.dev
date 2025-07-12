interface ImportMetaEnv {
  readonly PUBLIC_FORM_ID: string
  readonly PUBLIC_HOST_URL: string
  readonly SPOTIFY_REFRESH_TOKEN: string
  readonly SPOTIFY_CLIENT_ID: string
  readonly SPOTIFY_CLIENT_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
