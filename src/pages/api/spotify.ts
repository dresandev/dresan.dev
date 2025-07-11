import type { APIRoute } from "astro";

const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

const getAccessToken = async () => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });
  const data = await res.json();
  return data.access_token;
};

export const GET: APIRoute = async () => {
  const accessToken = await getAccessToken();

  const fetchTrack = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.status === 204) return null;
    return res.json();
  };

  let data = await fetchTrack('https://api.spotify.com/v1/me/player/currently-playing');
  if (!data || !data.item) {
    data = await fetchTrack('https://api.spotify.com/v1/me/player/recently-played?limit=1');
    if (data?.items?.length) {
      data = data.items[0];
    }
  }

  const track = data?.item || data?.track;

  if (!track) {
    return new Response(JSON.stringify({ error: 'No track found' }), { status: 404 });
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
  );
};
