import {
  Monitor,
  TrendingUp,
  Calendar,
  Clock,
  Video,
  KeyRound,
  Hash,
  Rocket,
  Sparkles,
  CircuitBoard,
  User,
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
      faculty: "Sanjoy Paul",
      zoomLink: "https://zoom.us/meeting/register/HFuHH_IwQJSaTNjFMY2Ybw",
      meetingId: "935 4062 8984",
      passcode: "0000",
    },
    {
      day: "Sunday",
      date: "15-Mar-2026",
      time: "10:00 AM – 1:00 PM",
      icon: TrendingUp,
      label: "Product Thinking & Problem Framing",
      desc: "Problem vs Solution Mindset, Outcome vs Output, Basic Problem-Framing Templates, AI-Assisted PM Workflows",
      faculty: "Sanjoy Paul",
      zoomLink: "https://zoom.us/meeting/register/7nNu_SuwRRCXFFhZoWn9EQ",
      meetingId: "959 4391 3905",
      passcode: "0000",
    },
  ];

  return (
    <div className="w-[480px] overflow-hidden relative bg-[hsl(162,90%,4%)] text-primary-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src={imarticusLogo}
          alt=""
          className="w-[420px] h-[420px] object-contain opacity-[0.03]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Circuit mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
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
          </pattern>
          <radialGradient id="fade" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.15" />
          </radialGradient>
          <mask id="meshMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" mask="url(#meshMask)" />
      </svg>

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(160,80%,40%,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-32 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(42,90%,56%,0.10) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(160,70%,50%,0.08) 0%, transparent 70%)' }} />

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
          Live Session
        </div>
      </div>

      {/* ─── HERO ─── */}
      <div className="relative px-6 pt-5 pb-7 text-center">
        <h1 className="text-[52px] font-black tracking-tighter leading-none mb-1">
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

        <p className="text-[11px] font-semibold opacity-45 tracking-[0.3em] uppercase mt-2.5">
          Weekend Sessions
        </p>

        {/* Decorative line */}
        <div className="mx-auto mt-5 w-28 h-[2px] rounded-full" style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--poster-gold-light)), transparent)`,
        }} />
      </div>

      {/* ─── SESSIONS ─── */}
      <div className="relative px-6 space-y-4 pb-5">
        {sessions.map(({ day, date, time, icon: Icon, label, desc, faculty, zoomLink, meetingId, passcode }, idx) => (
          <div key={day}>
            {/* Session label */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black"
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

            <div className="rounded-xl border border-white/[0.10] overflow-hidden bg-white/[0.05] backdrop-blur-sm" style={{
              boxShadow: '0 4px 24px hsla(160,80%,20%,0.08)',
            }}>
              {/* Date strip */}
              <div className="flex items-center gap-5 px-4 py-2.5 text-[10px] font-bold border-b border-white/[0.06]" style={{
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
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{
                    background: `linear-gradient(135deg, hsl(var(--poster-header-via)), hsl(var(--poster-header-to)))`,
                  }}>
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-extrabold block leading-tight text-[13px]">{label}</span>
                    <span className="text-[10px] opacity-50 leading-relaxed mt-0.5 block">{desc}</span>
                  </div>
                </div>

                {/* Faculty */}
                <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-2 border border-white/[0.06]">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{
                    background: `linear-gradient(135deg, hsl(var(--poster-gold)), hsl(var(--poster-gold-light)))`,
                  }}>
                    <User size={11} style={{ color: 'hsl(162,90%,4%)' }} />
                  </div>
                  <div>
                    <span className="text-[8px] font-semibold tracking-[0.15em] uppercase opacity-40 block">Faculty</span>
                    <span className="font-bold text-[12px] leading-tight block">{faculty}</span>
                  </div>
                </div>

                {/* Zoom */}
                <div className="border-t border-white/[0.06] pt-2.5 space-y-1.5">
                  <ZoomRow icon={Video} label="Zoom" value={
                    <a href={zoomLink} target="_blank" rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 decoration-white/30 hover:decoration-white/60 transition-colors text-[11px]"
                      style={{ color: `hsl(var(--poster-gold-light))` }}>
                      Register Here
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
          className="flex items-center justify-center gap-2 w-full rounded-xl py-4 text-sm font-extrabold tracking-wide transition-all hover:scale-[1.02] cursor-pointer"
          style={{
            background: `linear-gradient(135deg, hsl(var(--poster-gold)) 0%, hsl(var(--poster-gold-light)) 100%)`,
            color: 'hsl(162,90%,4%)',
            boxShadow: '0 8px 32px hsla(42,92%,56%,0.30)',
          }}
        >
          <Rocket size={15} />
          Don't Miss It — Join Now
        </a>
      </div>

      {/* ─── FOOTER ─── */}
      <div className="relative px-6 py-4 text-center border-t border-white/[0.06]">
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
