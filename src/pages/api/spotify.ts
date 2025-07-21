import type { APIRoute } from "astro"
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "astro:env/server"
import {
  SPOTIFY_TOKEN_URL,
  SPOTIFY_TRACK_BASE_URL,
} from "@/constants/urls"

const getAccessToken = async () => {
  const res = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })
  const data = await res.json()
  return data.access_token
}

export const GET: APIRoute = async () => {
  const accessToken = await getAccessToken()

  const fetchTrack = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    if (res.status === 204) return null
    return res.json()
  }

  let data = await fetchTrack(`${SPOTIFY_TRACK_BASE_URL}/currently-playing`)

  if (!data || !data.item) {
    data = await fetchTrack(`${SPOTIFY_TRACK_BASE_URL}/recently-played?limit=1`)
    if (data?.items?.length) {
      data = data.items[0]
    }
  }

  const track = data?.item || data?.track

  if (!track) {
    return new Response(JSON.stringify({ error: 'No track found' }), { status: 404 })
  }

  return new Response(
    JSON.stringify({
      title: track.name,
      artist: track.artists.map((a: any) => a.name).join(', '),
      albumImage: track.album.images[2].url,
      url: track.external_urls.spotify,
      preview: track.preview_url,
    }),
    { status: 200 }
  )
}
