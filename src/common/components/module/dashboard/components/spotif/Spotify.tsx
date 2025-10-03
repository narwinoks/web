import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// --- Tipe Data dari API Anda ---
interface TopTrack {
  id: string;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

interface NowPlayingSong {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  embedUrl: string;
}
export const Spotify = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingSong | null>(null);
  const [topTracks, setTopTracks] = useState<TopTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const fetcDataTopPlayer = async () => {
    try {
      const { data } = await axios.get(
        'https://winarno-backend.vercel.app/music',
      );
      setTopTracks(data);
    } catch {
      setTopTracks([]);
    }
  };
  const fetchNowPlaying = async () => {
    try {
      const { data } = await axios.get(
        'https://winarno-backend.vercel.app/get-now-playing',
      );
      setNowPlaying(data);
    } catch {
      setNowPlaying(null);
    }
  };

  useEffect(() => {
    const fetchMusicData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      fetchNowPlaying();
      fetcDataTopPlayer();
      setLoading(false);
    };

    fetchMusicData();
  }, []);

  return (
    <div className=" min-h-screen">
      <div className="mx-auto max-w-4xl">
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Now Playing
          </h2>
          {loading && (
            <div className="h-24 animate-pulse rounded-lg bg-gray-200"></div>
          )}
          {nowPlaying && !loading && (
            <iframe
              style={{ borderRadius: '12px' }}
              src={nowPlaying.embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}
          w-12 h-12 rounded-md ml-4 shadow-sm
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Top Playing
          </h2>
          <div className="space-y-2">
            {!loading &&
              topTracks.map((song, index) => (
                <a
                  key={song.id}
                  href={song.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light:text-borderLight flex items-center rounded-lg p-2  text-base transition-colors hover:bg-gray-100 hover:text-gray-700"
                >
                  <div className="w-8 text-center text-lg font-bold text-gray-400">
                    {index + 1}
                  </div>
                  <Image
                    src={song.albumImageUrl}
                    height={300}
                    width={300}
                    alt={song.title}
                    className="ml-4 h-12 w-12 rounded-md shadow-sm"
                  ></Image>
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold  ">{song.title}</p>
                    <p className="text-sm text-gray-500">{song.artist}</p>
                  </div>
                </a>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};
