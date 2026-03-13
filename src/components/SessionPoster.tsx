import {
  Monitor,
  TrendingUp,
  Calendar,
  Clock,
  Video,
  KeyRound,
  Hash,
  User,
  Award,
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
    <div
      className="w-[480px] overflow-hidden relative text-primary-foreground"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "linear-gradient(160deg, hsl(174,65%,15%) 0%, hsl(178,55%,12%) 20%, hsl(180,60%,9%) 45%, hsl(176,50%,14%) 70%, hsl(172,55%,11%) 100%)",
      }}
    >
      {/* Background logo watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={imarticusLogo}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] object-contain opacity-[0.08]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Tech grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="techGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="0" stroke="hsl(165,80%,45%)" strokeWidth="0.3" />
            <line x1="0" y1="0" x2="0" y2="40" stroke="hsl(165,80%,45%)" strokeWidth="0.3" />
            <circle cx="0" cy="0" r="1" fill="hsl(165,80%,55%)" />
          </pattern>
          <pattern id="diagLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="80" x2="80" y2="0" stroke="hsl(165,70%,40%)" strokeWidth="0.3" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#techGrid)" mask="url(#gridMask)" />
        <rect width="100%" height="100%" fill="url(#diagLines)" opacity="0.6" />
      </svg>

      {/* Glowing orbs */}
      <div className="absolute top-[-60px] right-[-40px] w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(180,80%,45%,0.25) 0%, transparent 60%)' }} />
      <div className="absolute bottom-[100px] left-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(174,70%,40%,0.18) 0%, transparent 60%)' }} />
      <div className="absolute top-[35%] right-[-20px] w-[250px] h-[250px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(180,90%,50%,0.15) 0%, transparent 55%)' }} />
      <div className="absolute bottom-[-40px] left-[20%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(178,80%,45%,0.16) 0%, transparent 55%)' }} />

      {/* Glowing horizontal lines */}
      <div className="absolute top-[18%] left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, hsla(180,80%,60%,0.18), transparent)' }} />
      <div className="absolute top-[50%] left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, hsla(174,80%,55%,0.1), transparent)' }} />
      <div className="absolute top-[82%] left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, hsla(180,80%,60%,0.12), transparent)' }} />

      {/* Diagonal light streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[140%] h-[30px] rotate-[25deg] opacity-[0.06]" style={{ background: 'linear-gradient(90deg, transparent 0%, hsla(180,90%,70%,0.8) 40%, hsla(174,80%,60%,0.6) 60%, transparent 100%)' }} />
        <div className="absolute top-[30%] -left-[10%] w-[140%] h-[20px] rotate-[25deg] opacity-[0.04]" style={{ background: 'linear-gradient(90deg, transparent 0%, hsla(174,90%,75%,0.8) 50%, transparent 100%)' }} />
        <div className="absolute top-[65%] -left-[10%] w-[140%] h-[25px] rotate-[25deg] opacity-[0.05]" style={{ background: 'linear-gradient(90deg, transparent 0%, hsla(180,85%,65%,0.7) 45%, transparent 100%)' }} />
      </div>

      {/* ─── TOP BAR ─── */}
      <div className="relative px-6 pt-6 pb-2 flex items-center justify-between">
        <img
          src={imarticusLogo}
          alt="Imarticus Learning"
          className="h-8 w-auto object-contain drop-shadow-md"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="flex items-center gap-2">
          {/* 12 Years badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-accent/30" style={{
            background: 'linear-gradient(135deg, hsla(42,92%,56%,0.15), hsla(42,90%,72%,0.08))',
            boxShadow: '0 0 12px hsla(42,92%,56%,0.15)',
          }}>
            <Award size={11} style={{ color: 'hsl(42,92%,56%)' }} />
            <span className="text-[9px] font-black tracking-wider" style={{ color: 'hsl(42,92%,56%)' }}>12 YEARS</span>
          </div>
          {/* Live Session tag */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10" style={{
            background: 'linear-gradient(135deg, hsla(160,80%,40%,0.2), hsla(168,70%,30%,0.1))',
            boxShadow: '0 0 10px hsla(160,80%,40%,0.12)',
          }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(160,80%,50%)' }} />
            <span className="text-[9px] font-bold tracking-wider opacity-80">LIVE SESSION</span>
          </div>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <div className="relative px-6 pt-5 pb-5 text-center">
        {/* Weekend Sessions tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 border border-white/10" style={{
          background: 'linear-gradient(135deg, hsla(160,80%,40%,0.12), hsla(168,70%,30%,0.06))',
        }}>
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase opacity-60">Weekend Sessions</span>
        </div>

        <h1 className="text-[56px] font-black tracking-tighter leading-none mb-1">
          IBM{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(42,92%,56%) 0%, hsl(42,90%,72%) 40%, hsl(42,92%,56%) 80%)`,
              WebkitBackgroundClip: 'text',
            }}
          >
            AIPM
          </span>
        </h1>

        {/* Decorative glow line */}
        <div className="mx-auto mt-4 w-32 h-[2px] rounded-full" style={{
          background: `linear-gradient(90deg, transparent, hsl(160,80%,45%), transparent)`,
          boxShadow: '0 0 8px hsla(160,80%,45%,0.4)',
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
                  background: `linear-gradient(135deg, hsl(42,92%,56%), hsl(42,90%,72%))`,
                  color: 'hsl(162,60%,6%)',
                  boxShadow: '0 0 8px hsla(42,92%,56%,0.3)',
                }}
              >
                {idx + 1}
              </span>
              <span className="text-[11px] font-black tracking-[0.15em] uppercase opacity-70">
                Session {idx + 1} — {day}
              </span>
            </div>

            {/* Glassmorphism card */}
            <div className="rounded-2xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, hsla(160,40%,20%,0.25), hsla(165,50%,15%,0.15))',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid hsla(160,80%,50%,0.15)',
              boxShadow: '0 8px 32px hsla(160,80%,20%,0.15), inset 0 1px 0 hsla(160,80%,60%,0.08), 0 0 20px hsla(160,80%,40%,0.06)',
            }}>
              {/* Date strip */}
              <div className="flex items-center gap-5 px-4 py-2.5 text-[10px] font-bold" style={{
                background: 'linear-gradient(90deg, hsla(160,70%,25%,0.4), hsla(168,60%,20%,0.2))',
                borderBottom: '1px solid hsla(160,80%,50%,0.1)',
              }}>
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} style={{ color: 'hsl(160,80%,55%)' }} /> {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} style={{ color: 'hsl(160,80%,55%)' }} /> {time}
                </span>
              </div>

              <div className="px-4 py-3.5 space-y-3">
                {/* Topic */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{
                    background: 'linear-gradient(135deg, hsla(160,70%,35%,0.3), hsla(168,60%,25%,0.2))',
                    border: '1px solid hsla(160,80%,50%,0.15)',
                    boxShadow: '0 0 10px hsla(160,80%,40%,0.1)',
                  }}>
                    <Icon size={15} style={{ color: 'hsl(160,80%,55%)' }} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-extrabold block leading-tight text-[13px]">{label}</span>
                    <span className="text-[10px] opacity-50 leading-relaxed mt-0.5 block">{desc}</span>
                  </div>
                </div>

                {/* Faculty */}
                <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{
                  background: 'hsla(160,40%,20%,0.2)',
                  border: '1px solid hsla(160,80%,50%,0.08)',
                }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{
                    background: 'linear-gradient(135deg, hsl(42,92%,56%), hsl(42,90%,72%))',
                    boxShadow: '0 0 8px hsla(42,92%,56%,0.25)',
                  }}>
                    <User size={11} style={{ color: 'hsl(162,60%,6%)' }} />
                  </div>
                  <div>
                    <span className="text-[8px] font-semibold tracking-[0.15em] uppercase opacity-40 block">Faculty</span>
                    <span className="font-bold text-[12px] leading-tight block">{faculty}</span>
                  </div>
                </div>

                {/* Zoom section */}
                <div className="pt-2.5 space-y-2" style={{ borderTop: '1px solid hsla(160,80%,50%,0.08)' }}>
                  <div className="flex items-center gap-2">
                    <Video size={11} style={{ color: 'hsl(160,80%,55%)' }} className="shrink-0" />
                    <span className="text-[9px] font-semibold opacity-40 w-8 shrink-0">Zoom</span>
                    <a
                      href={zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-bold tracking-wide transition-all"
                      style={{
                        background: 'linear-gradient(135deg, hsl(160,70%,35%), hsl(168,60%,30%))',
                        color: 'white',
                        boxShadow: '0 0 12px hsla(160,80%,40%,0.25)',
                      }}
                    >
                      Register Here
                    </a>
                  </div>
                  <ZoomRow icon={Hash} label="ID" value={meetingId} />
                  <ZoomRow icon={KeyRound} label="Pass" value={passcode} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── FOOTER ─── */}
      <div className="relative px-6 py-4 text-center" style={{ borderTop: '1px solid hsla(160,80%,50%,0.08)' }}>
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase opacity-35">
          © Imarticus Learning · www.imarticus.org
        </span>
      </div>
    </div>
  );
};

const ZoomRow = ({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <Icon size={11} className="shrink-0" style={{ color: 'hsl(160,80%,55%)' }} />
    <span className="text-[9px] font-semibold opacity-40 w-8 shrink-0">{label}</span>
    <div className="font-semibold text-[11px]">{value}</div>
  </div>
);

export default SessionPoster;
