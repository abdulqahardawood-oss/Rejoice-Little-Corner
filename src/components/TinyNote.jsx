import { littleNotes } from '../content'

export default function TinyNote({ noteIndex, onNext }) {
  return <div className="flex items-center gap-4 rounded-2xl border border-[#f0d7dc] bg-[#fffaf9]/90 px-5 py-4 text-left shadow-[0_12px_30px_rgba(130,34,60,.07)]"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f9e3e5] text-[#b02e4a]">♥</span><p className="m-0 flex-1 font-display text-base italic text-[#70434f]">{littleNotes[noteIndex]}</p><button className="whitespace-nowrap border-0 border-b border-[#d5a3ab] bg-transparent py-1 font-mono-ui text-[9px] text-[#a92b47]" onClick={onNext} type="button">another ↗</button></div>
}
