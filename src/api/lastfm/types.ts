export interface Artist {
  name: string;
  mbid: string;
  url: string;
  image: { "#text": string; size: string }[];
  stats?: { listeners: number; playcount: number };
  bio?: { summary: string; content: string };
}

export interface Album {
  name: string;
  artist: string;
  url: string;
  playcount: string;
  image: { "#text": string; size: string }[];
  tracks?: { track: Track[] };
}

export interface Track {
  name: string;
  duration: string;
  artist: string;
  url: string;
  "@attr": {
    rank: number;
  };
}
