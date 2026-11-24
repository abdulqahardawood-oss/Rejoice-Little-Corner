import MemoryStrip from './MemoryStrip'
import TinyNote from './TinyNote'

export default function InsideCorner({ noteIndex, onNextNote, onPlaySong, onPlayVideo }) {
  return (
    <>
      <section className="scroll-mt-9 bg-[#fff0ef] px-[22px] py-24 animate-fade-slide max-[760px]:px-[18px] max-[760px]:py-[70px]" id="letter">
        <article className="relative mx-auto max-w-[720px] overflow-hidden rounded-[3px] border border-[#f0d8dc] bg-[#fffdfa] px-[78px] py-[62px] shadow-[0_20px_60px_rgba(110,35,52,.09)] max-[760px]:px-7 max-[760px]:py-[42px]">
          <div className="flex items-center justify-between border-b border-[#f2e0e2] pb-[18px] text-[8px] font-bold tracking-[.18em] text-[#a18c91]"><span>A LETTER FOR REJOICE</span><span className="text-[15px] text-[#b02e4a]" aria-hidden="true">♥</span></div>
          <p className="mb-[22px] mt-9 font-display text-[28px] text-[#a71935]">My beautiful Rejoice,</p>
          <div className="relative z-[1] space-y-5 font-display text-[18px] leading-[1.85] text-[#472430]">
            <p>I wanted to make you something that could hold more than a quick message on a screen. A text can say “you’re amazing,” but sometimes that feels much too small for everything I hope you remember about yourself. So here is a little corner, made carefully and meant only for you. Take your time with it. Every part is here because I wanted you to feel seen, appreciated, and celebrated.</p>
            <p>First, Rejoice, please let this land: you are beautiful. Not only in the photographs, not only when the light is perfect or when you feel especially confident, but in the simple, real, unmistakably you way that cannot be captured by a camera. There is a loveliness in your face, in your presence, and in the way you carry yourself. I hope you can see even a little of what others see when they look at you.</p>
            <p>And your beauty is not the whole of what makes you special. You have a way of being memorable just by being yourself. The world is full of people trying to be noticed, but there is something about you that stays with a person. You leave a little warmth behind in ordinary moments. You make someone pause, smile, remember a conversation, or feel glad that your paths crossed. That kind of effect is precious.</p>
            <p>I wish I could give you a pair of eyes that would let you see yourself the way I see you on the days you are hard on yourself. I would want you to notice the grace you carry, the softness and strength that can exist together, and all the small details that make you Rejoice. I would want you to understand that you do not need to change a thing about your face, your shape, your laugh, or your way of being in order to deserve admiration. You are already worthy of being cherished exactly as you are.</p>
            <p>There may be days when you feel tired, uncertain, overlooked, or not quite like yourself. If one of those days finds you, please do not let it convince you that the beautiful parts of you have disappeared. A difficult day is only a day. A doubtful thought is only a thought. Neither one gets to tell the whole story of who you are. You are still the same remarkable girl with so much light and loveliness in her, even when you cannot feel it for yourself.</p>
            <p>I hope life is gentle with your heart. I hope you are surrounded by people who speak kindly to you, who listen when you need to be heard, and who make room for you to be fully yourself. I hope you get reasons to laugh until your cheeks hurt, quiet moments that let you breathe, and good surprises that remind you life can still be sweet. You deserve affection that feels safe, respect that never has to be begged for, and happiness that does not ask you to shrink.</p>
            <p>Thank you for being you. Thank you for the moments, the pictures, the little clips, and the pieces of your life you have shared. They are lovely to look back on because they carry traces of you: a look, a smile, a mood, a moment passing by. I wanted to put them here so you could revisit them whenever you like and remember that your presence is worth keeping close.</p>
            <p>I chose “One Of The Girls” because it is your favourite, and because a song can make a moment feel like it belongs to you. Let it play while you look through these memories, and let this page be a tiny pause in your day: just you, your song, and a reminder that someone thinks the world of you.</p>
            <p>There is no special occasion required to tell someone they matter. You do not need to achieve something first, look a certain way, or wait for a birthday before you deserve to be celebrated. I wanted to say it now, plainly and with my whole heart: Rejoice, you matter. You are admired. You are beautiful. You are appreciated more than this page can possibly explain.</p>
            <p>Whenever you need a reminder, come back here. Read this slowly if the day has been heavy. Look at your photos if you need to remember how lovely you are. Press play if a song can lift your mood. And if you ever forget how special you are, borrow my certainty until you find your own again. I hope this little corner leaves you feeling a bit more loved than you did before you opened it.</p>
          </div>
          <p className="relative z-[1] mt-9 font-display text-[19px] leading-[1.7] text-[#68404b]">Your friend, with a lot of love and admiration,<br /><span className="italic text-[#a71935]">Damilare, your friend</span> <span aria-hidden="true">♥</span></p>
          <span className="pointer-events-none absolute -bottom-16 -right-3 font-display text-[220px] leading-none text-[#fbefef]" aria-hidden="true">♥</span>
        </article>

        <div className="mx-auto mt-12 max-w-[670px] text-center"><p className="mb-4 text-[9px] font-bold tracking-[.2em] text-[#987681]">A SMALL COMPLIMENT, ON DEMAND</p><TinyNote noteIndex={noteIndex} onNext={onNextNote} /></div>

        <section className="mx-auto mt-8 flex max-w-[670px] items-center gap-5 rounded-[22px] border border-[#f1cdd2] bg-gradient-to-r from-[#ffe8e9] via-[#fff8f6] to-[#ffe1e4] px-5 py-5 shadow-[0_14px_35px_rgba(130,34,60,.09)] max-[560px]:gap-3 max-[560px]:px-4" aria-label="The page soundtrack">
          <div className="mini-record" aria-hidden="true"><span /></div>
          <div className="min-w-0 flex-1"><p className="mb-1 text-[8px] font-bold tracking-[.18em] text-[#977580]">ON YOUR LITTLE SOUNDTRACK</p><h2 className="m-0 truncate font-display text-[22px] italic text-[#5d2032]">ONE OF THE GIRLS</h2><p className="mt-1 text-[10px] text-[#8c737b]">The Weeknd, JENNIE &amp; Lily Rose Depp · your favourite</p></div>
          <div className="soundwave hidden items-center gap-[3px] sm:flex" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <button className="rounded-full border-0 bg-[#b51d3a] px-4 py-2.5 text-[10px] font-bold text-white shadow-[0_7px_14px_rgba(169,43,71,.2)] transition hover:-translate-y-0.5 hover:bg-[#94142e] max-[560px]:px-3" onClick={onPlaySong} type="button">play again ♫</button>
        </section>

        <div className="mx-auto mt-20 max-w-[980px]"><MemoryStrip onPlayVideo={onPlayVideo} /></div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#942541] via-[#761e37] to-[#48172a] px-6 py-[88px] text-center text-[#fff8f7] max-[760px]:py-[70px]">
        <span className="absolute -left-5 -top-20 font-display text-[260px] text-white/[.035]" aria-hidden="true">♥</span><span className="absolute -bottom-36 -right-12 font-display text-[330px] text-white/[.035]" aria-hidden="true">♫</span>
        <div className="relative z-[1] mx-auto max-w-[620px]"><span className="inline-block animate-heartbeat text-[22px] text-[#f0c6ca]" aria-hidden="true">♥</span><p className="mb-5 mt-4 text-[9px] font-bold tracking-[.2em] text-[#f4dedf]">A REMINDER FOR THE DAYS YOU NEED ONE</p><h2 className="m-0 font-display text-[clamp(39px,5vw,59px)] font-medium leading-[1.12] tracking-[-.045em]">Rejoice, never forget<br />how <em className="text-[#f0c6ca]">beautiful you are.</em></h2><p className="mx-auto mt-6 max-w-[440px] text-xs leading-[1.9] text-[#f4dedf]">Keep the song, keep the memories, and keep this little reminder close: you are a rare and lovely person, and the world is better with you in it.</p></div>
      </section>
      <footer className="bg-[#32121e] px-5 py-8 text-center text-[#fff2f1]"><span className="inline-block animate-heartbeat text-[#e5a2aa]" aria-hidden="true">♥</span><p className="my-2 font-display text-sm italic">A small reminder: someone is always cheering for you.</p><span className="text-[8px] tracking-[.18em] text-[#bd9ba2]">MADE WITH CARE · FOR REJOICE</span></footer>
    </>
  )
}





