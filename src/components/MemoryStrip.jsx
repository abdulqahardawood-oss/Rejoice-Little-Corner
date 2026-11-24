import { memories } from '../content'

function MemoryCard({ memory, onPlayVideo }) {
  const video = memory.type === 'video'
  return (
    <figure className="m-0">
      <div className={`relative overflow-hidden rounded-[17px] border-[7px] border-white bg-gradient-to-br from-[#f9e1e3] via-[#fff0ef] to-[#f2d1d6] shadow-[0_14px_30px_rgba(130,34,60,.12)] ${video ? 'aspect-video' : 'aspect-[4/3]'}`}>
        {video
          ? <video className="absolute inset-0 h-full w-full bg-[#29111b] object-contain" src={memory.src} controls playsInline preload="metadata" aria-label={memory.label} onPlay={onPlayVideo} />
          : <img className="absolute inset-0 h-full w-full object-cover" src={memory.src} alt={memory.label} loading="lazy" />}
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-1 pt-3 font-display text-sm italic text-[#704956]"><span>{memory.label}</span><span className="text-[#b63852]" aria-hidden="true">{video ? '▶' : '♥'}</span></figcaption>
    </figure>
  )
}

export default function MemoryStrip({ onPlayVideo }) {
  const photoCount = memories.filter((memory) => memory.type === 'photo').length
  const videoCount = memories.filter((memory) => memory.type === 'video').length
  return (
    <section className="rounded-[26px] border border-[#f0d7dc] bg-[#fffaf9] px-5 py-8 shadow-[0_17px_45px_rgba(130,34,60,.06)] sm:px-8" id="memories">
      <div className="mb-7 flex items-end justify-between gap-4 max-[560px]:items-start">
        <div><p className="mb-2 text-[9px] font-bold tracking-[.2em] text-[#987681]">A FEW MOMENTS TO KEEP</p><h2 className="m-0 font-display text-4xl font-medium tracking-[-.045em] text-[#572033]">Rejoice in <em className="text-[#b02e4a]">frames.</em></h2></div>
        <span className="hidden text-right text-[9px] leading-[1.7] tracking-[.08em] text-[#9e8289] sm:block">{photoCount} photos · {videoCount} little videos</span>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-7 max-[560px]:grid-cols-1 sm:gap-x-7 sm:gap-y-9">{memories.map((memory) => <MemoryCard key={memory.number} memory={memory} onPlayVideo={onPlayVideo} />)}</div>
    </section>
  )
}

