# Artist Showcase React App

A React + TypeScript app to explore artists, albums, and tracks using the Last.fm API. Users can search for songs and albums, view album details, and favourite tracks globally with persistence.

## Features

- Search songs and albums by artist
- View top albums of an artist with sorting
- Album details with track lists, play counts, and cover art
- Favourite tracks across the app with persistent storage
- Responsive and clean UI with Chakra UI
- Global state management using Zustand
- API fetching and caching with React Query

---

## Setup

### Prerequisites

- Node.js v18+
- npm
- Last.fm API key (register at [Last.fm API](https://www.last.fm/api))

### Installation

    git clone https://github.com/amrullahfarook/gapstars-alicia-assignment.git

    cd gapstars-alicia-assignment

    npm install

    npm run dev

### Environment Variables

Create a .env file in the root:

    VITE_LASTFM_API_KEY=<your_lastfm_api_key>

### Pages & Routes

Home / Search Page

    Route: /

    Purpose: Search for tracks and albums

    Features:

        Search by query

        Displays tracks and albums in grouped sections

        Favourite tracks

Artist Album Overview Page

    Route: /album-overview/:artistName

    Purpose: Show all albums of an artist

    Parameters:

        artistName — name of the artist

    Features:

        Album cover, album name, artist

        Sorting by name

Album Details Page

    Route: /album/:artistName/:albumName

    Purpose: Detailed album view

    Parameters:
        - artistName — name of the artist
        - albumName — album title

    Features:
        - Album cover, title, total play count
        - List of tracks with favourite buttons
        - Persistent favourites via Zustand

### Notes

- API requests rely on a valid Last.fm API key
- Chakra UI + CSS Modules for styling
- React Query manages caching, loading, and errors
