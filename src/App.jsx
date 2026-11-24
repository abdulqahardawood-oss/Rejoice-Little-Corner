import { useEffect, useRef, useState } from 'react'
import { littleNotes } from './content'
import InsideCorner from './components/InsideCorner'
import OpeningGate from './components/OpeningGate'
import SpotifyPlayer from './components/SpotifyPlayer'

const floaters = ['✦', '♫', '✧', '♪', '✦', '♫', '✧', '♪']

export default function App() {
  const [opened, setOpened] = useState(false)
  const [noteIndex, setNoteIndex] = useState(0)
  const spotifyRef = useRef(null)

  useEffect(() => {
    document.title = opened ? 'A little note for Rejoice ✦' : 'A little love note for Rejoice'
  }, [opened])

  const toggleLetter = () => {
    if (opened) {
      setOpened(false)
      spotifyRef.current?.stop()
      window.setTimeout(() => document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      return
    }
    setOpened(true)
    spotifyRef.current?.start()
    window.setTimeout(() => document.querySelector('#letter')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500)
  }

  const nextNote = () => setNoteIndex((current) => (current + 1) % littleNotes.length)
  const pauseVideos = () => document.querySelectorAll('#memories video').forEach((video) => video.pause())
  const playSong = () => { pauseVideos(); spotifyRef.current?.start() }
  const pauseSong = () => spotifyRef.current?.pause()

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff7f5] text-[#3e1d26]">
      <div className="floaters" aria-hidden="true">{floaters.map((item, index) => <span key={index} style={{ '--i': index }}>{item}</span>)}</div>
      <header className="fixed left-0 top-0 z-20 flex h-[76px] w-full items-center justify-between border-b border-[#f0d4d8]/80 bg-[#fffafa]/90 px-[7.2%] backdrop-blur-md max-[760px]:h-[68px] max-[760px]:px-[6%]">
        <a className="flex items-center gap-2.5 text-[10px] font-bold tracking-[.14em] text-[#5c1b2c]" href="#top"><span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#fbe2e5] text-[#a71935]">✦</span>A LITTLE CORNER FOR REJOICE</a>
        <SpotifyPlayer ref={spotifyRef} />
      </header>
      <OpeningGate onOpen={toggleLetter} opened={opened} />
      {opened && <InsideCorner noteIndex={noteIndex} onNextNote={nextNote} onPlaySong={playSong} onPlayVideo={pauseSong} />}
    </div>
  )
}




