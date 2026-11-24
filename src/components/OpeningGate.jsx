export default function OpeningGate({ onOpen, opened }) {
  return (
    <section className="relative grid min-h-[720px] h-[min(100vh,900px)] grid-cols-2 items-center overflow-hidden bg-[radial-gradient(ellipse_at_78%_48%,#f9dfe3_0,transparent_38%),linear-gradient(120deg,#fff9f7,#fff0ef)] px-[12%] pb-[90px] pt-[110px] max-[760px]:h-auto max-[760px]:min-h-[820px] max-[760px]:grid-cols-1 max-[760px]:px-6 max-[760px]:pb-[92px] max-[760px]:pt-[118px]" id="top">
      <div className="absolute -right-[250px] top-4 h-[500px] w-[500px] rounded-full border border-[#e8c5cc] shadow-[0_0_0_45px_rgba(255,255,255,.18),0_0_0_95px_rgba(255,255,255,.1)] animate-orbit" aria-hidden="true" />
      <div className="relative z-[1] max-w-[500px] animate-fade-slide max-[760px]:mx-auto max-[760px]:text-center">
        <p className="mb-[27px] flex items-center gap-2.5 text-[9px] font-bold tracking-[.2em] text-[#916879] max-[760px]:justify-center"><span className="h-px w-[22px] bg-[#bd233f]" />A LITTLE NOTE FOR REJOICE</p>
        <h1 className="m-0 font-display text-[clamp(48px,6vw,78px)] font-medium leading-[1.08] tracking-[-.045em] text-[#4e1d2c] max-[760px]:text-[clamp(47px,12vw,70px)]">For a beautiful girl<br />who deserves to know<br />how <em className="text-[#b51d3a]">loved she is.</em></h1>
        <p className="my-6 max-w-[385px] text-sm leading-[1.9] text-[#80606b] max-[760px]:mx-auto">Rejoice, this little corner holds a long note from my heart, some of your favourite moments, and a song that belongs on your soundtrack.</p>
        <button className="flex items-center gap-2.5 border-0 bg-transparent p-0 text-xs font-bold text-[#a71935] transition-all hover:gap-4 max-[760px]:mx-auto" onClick={onOpen} type="button">{opened ? 'Close your note' : 'Open your note'} <span className="text-[17px]">{opened ? '↑' : '↓'}</span></button>
        <div className="mt-[58px] flex items-center gap-2 text-[10px] text-[#a38c92] max-[760px]:mt-[32px] max-[760px]:justify-center"><span className="text-[#c35268]">✧</span> Made with care, music, and a whole lot of appreciation.</div>
      </div>
      <div className="relative z-[1] flex min-h-[400px] flex-col items-center justify-center animate-fade-slide delay-100 max-[760px]:min-h-[350px]">
        <div className="vinyl-disc" aria-hidden="true"><span /></div>
        <div className="absolute h-[350px] w-[350px] animate-breathe rounded-full border border-[#dba8b1] opacity-70 max-[760px]:h-[285px] max-[760px]:w-[285px]" aria-hidden="true" />
        <div className="absolute h-[420px] w-[420px] animate-breathe rounded-full border border-[#dba8b1] opacity-35 [animation-delay:1.2s] max-[760px]:h-[340px] max-[760px]:w-[340px]" aria-hidden="true" />
        <span className="absolute right-[13%] top-[14%] rotate-[-14deg] font-display text-2xl text-[#b23853] animate-heartbeat" aria-hidden="true">♫</span>
        <span className="absolute left-[12%] top-[23%] font-display text-xl text-[#c96f7e] animate-heartbeat delay-100" aria-hidden="true">♥</span>
        <button className={`letter-envelope relative h-[182px] w-[260px] border-0 bg-transparent p-0 drop-shadow-[0_21px_19px_rgba(126,30,56,.15)] transition hover:-translate-y-1.5 ${opened ? 'is-open' : ''}`} onClick={onOpen} type="button" aria-label={opened ? 'Close the letter for Rejoice' : 'Open the letter for Rejoice'} aria-expanded={opened} aria-controls="letter">
          <span className="mail-shadow" /><span className="mail-letter"><span className="text-[31px] text-[#ad2946]">♥</span></span><span className="mail-back" /><span className="mail-front" /><span className="mail-flap" /><span className="mail-seal">R</span>
        </button>
        <p className="mt-[33px] text-[10px] tracking-[.12em] text-[#967680]">{opened ? 'Your note is open · music is on' : 'Tap the envelope to open'}</p>
      </div>
      <div className="absolute bottom-7 left-[7.2%] right-[7.2%] flex justify-between border-t border-[#f0d7dc] pt-[13px] text-[8px] tracking-[.16em] text-[#9c858c] max-[760px]:left-[6%] max-[760px]:right-[6%]"><span>A NOTE FROM THE HEART</span><span>MADE WITH CARE · FOR REJOICE</span></div>
    </section>
  )
}

