import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { spotifyTrackUri } from '../content'

const SpotifyPlayer = forwardRef(function SpotifyPlayer(_, ref) {
  const mountRef = useRef(null)
  const playerWrapRef = useRef(null)
  const controllerRef = useRef(null)
  const controllerRequestedRef = useRef(false)
  const pendingPlayRef = useRef(false)
  const spotifyReadyRef = useRef(false)
  const loopingRef = useRef(false)
  const startedRef = useRef(false)
  const switchingRef = useRef(false)
  const lastStartRef = useRef(0)
  const [expanded, setExpanded] = useState(false)

  const revealPlayer = () => {
    playerWrapRef.current?.classList.remove('is-concealed')
    playerWrapRef.current?.classList.add('is-visible')
    setExpanded(true)
  }

  const concealPlayer = () => {
    playerWrapRef.current?.classList.remove('is-visible')
    playerWrapRef.current?.classList.add('is-concealed')
    setExpanded(false)
  }

  const play = () => {
    loopingRef.current = true
    revealPlayer()
    if (controllerRef.current && spotifyReadyRef.current) {
      try { controllerRef.current.play() } catch { /* Spotify keeps its play control available. */ }
    } else {
      pendingPlayRef.current = true
    }
  }

  const pause = () => {
    loopingRef.current = false
    pendingPlayRef.current = false
    if (controllerRef.current && spotifyReadyRef.current) {
      try { controllerRef.current.pause() } catch { /* Spotify keeps its pause control available. */ }
    }
  }

  useImperativeHandle(ref, () => ({
    start: play,
    pause,
    stop() {
      pause()
      concealPlayer()
    },
  }), [])

  useEffect(() => {
    const initializeSpotify = (iframeApi) => {
      if (!mountRef.current || controllerRef.current || controllerRequestedRef.current) return
      if (typeof iframeApi?.createController !== 'function') return
      controllerRequestedRef.current = true
      try {
        iframeApi.createController(mountRef.current, { width: '100%', height: '80', uri: spotifyTrackUri }, (controller) => {
          controllerRef.current = controller
          controller.addListener('playback_started', () => { startedRef.current = true })
          controller.addListener('playback_update', (event) => {
            const { isPaused, duration, position } = event.data
            if (isPaused && startedRef.current && duration > 0 && position < duration - 1500) {
              loopingRef.current = false
            }
            if (loopingRef.current && duration > 0 && position >= duration - 900 && !switchingRef.current) {
              switchingRef.current = true
              const durationSeconds = duration / 1000
              const maxStart = Math.max(0, Math.floor(durationSeconds - 8))
              let nextStart = Math.floor(Math.random() * (maxStart + 1))
              if (maxStart > 8 && Math.abs(nextStart - lastStartRef.current) < 5) {
                nextStart = (nextStart + Math.floor((maxStart + 1) / 2)) % (maxStart + 1)
              }
              lastStartRef.current = nextStart
              try {
                controller.seek(nextStart)
                window.setTimeout(() => {
                  if (loopingRef.current) controller.play()
                }, 300)
              } catch { /* Spotify keeps its play control available. */ }
              window.setTimeout(() => { switchingRef.current = false }, 1800)
            }
          })
          controller.addListener('ready', () => {
            spotifyReadyRef.current = true
            if (pendingPlayRef.current) {
              pendingPlayRef.current = false
              try { controller.play() } catch { /* Spotify keeps its play control available. */ }
            }
          })
        })
      } catch (error) {
        controllerRequestedRef.current = false
        console.error('Spotify player initialization failed:', error)
      }
    }
    const handleSpotifyApiReady = () => initializeSpotify(window.spotifyIframeApi)
    window.addEventListener('spotify-iframe-api-ready', handleSpotifyApiReady)
    if (window.spotifyIframeApi) initializeSpotify(window.spotifyIframeApi)
    return () => window.removeEventListener('spotify-iframe-api-ready', handleSpotifyApiReady)
  }, [])

  return (
    <div className="relative">
      <button className="flex items-center gap-2 rounded-full border border-[#e9c8cf] bg-white/85 px-[15px] py-2.5 text-[11px] text-[#972943] transition hover:-translate-y-0.5 hover:bg-white" onClick={play} type="button" aria-expanded={expanded} aria-controls="spotify-player-wrap"><span aria-hidden="true">♫</span><span>{expanded ? 'ONE OF THE GIRLS · Spotify' : 'Play song'}</span></button>
      <div ref={playerWrapRef} id="spotify-player-wrap" className="spotify-player is-concealed absolute right-0 top-12 z-30 w-[min(360px,calc(100vw-32px))] overflow-hidden rounded-xl border border-[#efdbde] shadow-[0_12px_34px_rgba(130,34,60,.18)]" aria-hidden={!expanded}>
        <div ref={mountRef} aria-label="Spotify player for One Of The Girls" />
      </div>
    </div>
  )
})

export default SpotifyPlayer


