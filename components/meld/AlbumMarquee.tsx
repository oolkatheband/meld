'use client'

import { motion } from 'framer-motion'

const ALBUMS = [
  { title: 'Hurry Up, We\'re Dreaming', artist: 'M83', color: '#A855F7' },
  { title: 'An Awesome Wave', artist: 'Alt-J', color: '#4A9EFF' },
  { title: 'Currents', artist: 'Tame Impala', color: '#F59E0B' },
  { title: 'xx', artist: 'The xx', color: '#F5F5F5' },
  { title: 'When We All Fall Asleep', artist: 'Billie Eilish', color: '#1DB954' },
  { title: 'Random Access Memories', artist: 'Daft Punk', color: '#EC4899' },
  { title: 'In Rainbows', artist: 'Radiohead', color: '#06B6D4' },
  { title: 'Tranquility Base', artist: 'Arctic Monkeys', color: '#F97316' },
  { title: 'DAMN.', artist: 'Kendrick Lamar', color: '#A855F7' },
  { title: 'Blonde', artist: 'Frank Ocean', color: '#4A9EFF' },
  { title: 'Discovery', artist: 'Daft Punk', color: '#1DB954' },
  { title: 'Coexist', artist: 'The xx', color: '#F59E0B' },
]

function AlbumTile({ album }: { album: (typeof ALBUMS)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center p-2 mx-2"
      style={{
        backgroundColor: `${album.color}18`,
        border: `1px solid ${album.color}25`,
      }}
    >
      <div
        className="w-10 h-10 rounded-lg mb-1"
        style={{
          background: `linear-gradient(135deg, ${album.color}60, ${album.color}20)`,
        }}
        aria-hidden="true"
      />
      <div className="text-center">
        <div className="font-bold truncate w-16 text-center" style={{ fontSize: '7px', color: '#F5F5F5' }}>
          {album.title}
        </div>
        <div className="truncate w-16 text-center" style={{ fontSize: '6px', color: album.color }}>
          {album.artist}
        </div>
      </div>
    </div>
  )
}

export default function AlbumMarquee() {
  const doubled = [...ALBUMS, ...ALBUMS]

  return (
    <div
      className="py-12 overflow-hidden"
      style={{ borderTop: '1px solid #2A2A2E', borderBottom: '1px solid #2A2A2E' }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {doubled.map((album, i) => (
          <AlbumTile key={i} album={album} />
        ))}
      </div>
    </div>
  )
}
