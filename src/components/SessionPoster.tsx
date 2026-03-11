import {
  Monitor,
  TrendingUp,
  MessageCircle,
  Calendar,
  Clock,
  Video,
  KeyRound,
  Hash,
  Rocket,
  Sparkles,
  CircuitBoard,
  type LucideIcon,
} from "lucide-react";
import imarticusLogo from "@/assets/imarticus-logo.svg";

const SessionPoster = () => {
  const sessions = [
    {
      day: "Saturday",
      date: "14-Mar-2026",
      time: "4:00 PM – 7:00 PM",
      icon: Monitor,
      label: "Introduction to Product Management",
      desc: "Role, Lifecycle, Career Paths",
      zoomLink: "https://zoom.us/meeting/register/HFuHH_IwQJSaTNjFMY2Ybw",
      meetingId: "935 4062 8984",
      passcode: "0000",
    },
    {
      day: "Sunday",
      date: "8-Feb-2026",
      time: "10:00 AM – 1:00 PM",
      icon: TrendingUp,
      label: "Product Thinking & Problem Framing",
      desc: "Problem vs Solution Mindset, Outcome vs Output, Basic Problem-Framing Templates, Examples of AI-Assisted PM Workflows. Value Creation, Value Communication, Value Delivery.",
      zoomLink: "https://zoom.us/meeting/register/7nNu_SuwRRCXFFhZoWn9EQ",
      meetingId: "959 4391 3905",
      passcode: "0000",
    },
  ];

  return (
    <div className="w-[480px] overflow-hidden relative bg-[hsl(162,90%,4%)] text-primary-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Full-poster tech mesh background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="white" />
            <circle cx="0" cy="0" r="0.8" fill="white" />
            <circle cx="60" cy="0" r="0.8" fill="white" />
            <circle cx="0" cy="60" r="0.8" fill="white" />
            <circle cx="60" cy="60" r="0.8" fill="white" />
            <line x1="0" y1="0" x2="30" y2="30" stroke="white" strokeWidth="0.3" />
            <line x1="60" y1="0" x2="30" y2="30" stroke="white" strokeWidth="0.3" />
            <line x1="30" y1="30" x2="60" y2="60" stroke="white" strokeWidth="0.3" />
            <line x1="30" y1="30" x2="0" y2="60" stroke="white" strokeWidth="0.3" />
            <line x1="30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="0.2" />
            <line x1="0" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.2" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </radialGradient>
          <mask id="meshMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" mask="url(#meshMask)" />
      </svg>

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(160,80%,40%,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 left-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(42,90%,56%,0.08) 0%, transparent 70%)' }} />

      {/* ─── TOP BAR ─── */}
      <div className="relative px-6 pt-6 pb-2 flex items-center justify-between">
        <img
          src={imarticusLogo}
          alt="Imarticus Learning"
          className="h-8 w-auto object-contain drop-shadow-md"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] uppercase opacity-50">
          <Sparkles size={10} />
          Live Masterclass
        </div>
      </div>

      {/* ─── HERO ─── */}
      <div className="relative px-6 pt-6 pb-8 text-center">
        <div className="inline-flex items-center gap-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 mb-5">
          <CircuitBoard size={11} className="opacity-60" />
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase opacity-70">
            AI-Powered Product Management
          </span>
        </div>

        <h1 className="text-5xl font-black tracking-tighter leading-none mb-1.5">
          IBM{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--poster-gold)) 0%, hsl(var(--poster-gold-light)) 50%, hsl(var(--poster-gold)) 100%)`,
            }}
          >
            AIPM
          </span>
        </h1>

        <p className="text-xs font-medium opacity-40 tracking-widest uppercase mt-2">
          Upcoming Weekend Sessions
        </p>

        {/* Gold line */}
        <div className="mx-auto mt-5 w-24 h-[2px] rounded-full" style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--poster-gold-light)), transparent)`,
        }} />
      </div>

      {/* ─── FACULTY ─── */}
      <div className="relative px-6 mb-5">
        <div className="flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.08]">
          <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{
            background: `linear-gradient(135deg, hsl(var(--poster-header-via)), hsl(var(--poster-header-to)))`,
          }}>
            <MessageCircle size={14} />
          </div>
          <div>
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase opacity-50 block">Faculty</span>
            <span className="font-bold text-sm leading-tight block">Sanjoy Paul</span>
          </div>
        </div>
      </div>

      {/* ─── SESSIONS ─── */}
      <div className="relative px-6 space-y-4 pb-5">
        {sessions.map(({ day, date, time, icon: Icon, label, desc, zoomLink, meetingId, passcode }, idx) => (
          <div key={day}>
            {/* Session label */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-[18px] h-[18px] rounded-md flex items-center justify-center text-[9px] font-black"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--poster-gold)), hsl(var(--poster-gold-light)))`,
                  color: 'hsl(162,90%,4%)',
                }}
              >
                {idx + 1}
              </span>
              <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase opacity-50">
                Session {idx + 1} — {day}
              </span>
            </div>

            <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.04] backdrop-blur-sm">
              {/* Date strip */}
              <div className="flex items-center gap-5 px-4 py-2 text-[10px] font-bold border-b border-white/[0.06]" style={{
                background: `linear-gradient(90deg, hsl(var(--poster-header-from)), hsl(var(--poster-header-via)))`,
              }}>
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} /> {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} /> {time}
                </span>
              </div>

              <div className="px-4 py-3.5 space-y-3">
                {/* Topic */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{
                    background: `linear-gradient(135deg, hsl(var(--poster-header-via)), hsl(var(--poster-header-to)))`,
                  }}>
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold block leading-tight text-[13px]">{label}</span>
                    <span className="text-[10px] opacity-55 leading-relaxed mt-0.5 block">{desc}</span>
                  </div>
                </div>

                {/* Zoom */}
                <div className="border-t border-white/[0.06] pt-2.5 space-y-1.5">
                  <ZoomRow icon={Video} label="Zoom" value={
                    <a href={zoomLink} target="_blank" rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 decoration-white/30 hover:decoration-white/60 transition-colors text-[11px]"
                      style={{ color: `hsl(var(--poster-gold-light))` }}>
                      Click Here
                    </a>
                  } />
                  <ZoomRow icon={Hash} label="ID" value={meetingId} />
                  <ZoomRow icon={KeyRound} label="Pass" value={passcode} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── CTA ─── */}
      <div className="relative px-6 pb-5">
        <a
          href={sessions[0].zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-sm font-extrabold tracking-wide transition-all hover:scale-[1.01] cursor-pointer"
          style={{
            background: `linear-gradient(135deg, hsl(var(--poster-gold)) 0%, hsl(var(--poster-gold-light)) 100%)`,
            color: 'hsl(162,90%,4%)',
            boxShadow: '0 8px 32px hsla(42,92%,56%,0.25)',
          }}
        >
          <Rocket size={15} />
          Don't Miss It — Join Now
        </a>
      </div>

      {/* ─── FOOTER ─── */}
      <div className="relative px-6 py-3.5 text-center border-t border-white/[0.06]">
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase opacity-35">
          © Imarticus Learning · www.imarticus.org
        </span>
      </div>
    </div>
  );
};

const ZoomRow = ({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <Icon size={11} className="opacity-40 shrink-0" />
    <span className="text-[9px] font-semibold opacity-40 w-8 shrink-0">{label}</span>
    <div className="font-semibold text-[11px]">{value}</div>
  </div>
);

export default SessionPoster;
