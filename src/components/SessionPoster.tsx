import {
  Monitor,
  TrendingUp,
  Calendar,
  Clock,
  Video,
  KeyRound,
  Hash,
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
    <div
      className="w-[480px] overflow-hidden relative text-white"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "linear-gradient(160deg, #0D3B3B 0%, #0A2F2F 25%, #082828 50%, #0B3232 75%, #0A2F2F 100%)",
      }}
    >
      {/* Background logo watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={imarticusLogo}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] object-contain opacity-[0.06]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Tech grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="techGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#1ED6C3" strokeWidth="0.3" />
            <line x1="0" y1="0" x2="0" y2="40" stroke="#1ED6C3" strokeWidth="0.3" />
            <circle cx="0" cy="0" r="1.5" fill="#2EF0D1" />
          </pattern>
          <pattern id="diagLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="80" x2="80" y2="0" stroke="#1ED6C3" strokeWidth="0.3" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.03" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#techGrid)" mask="url(#gridMask)" />
        <rect width="100%" height="100%" fill="url(#diagLines)" opacity="0.5" />
      </svg>

      {/* Glowing orbs */}
      <div className="absolute top-[-60px] right-[-40px] w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,214,195,0.28) 0%, transparent 60%)' }} />
      <div className="absolute bottom-[100px] left-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,240,209,0.2) 0%, transparent 60%)' }} />
      <div className="absolute top-[35%] right-[-20px] w-[250px] h-[250px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,214,195,0.18) 0%, transparent 55%)' }} />
      <div className="absolute bottom-[-40px] left-[20%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,240,209,0.16) 0%, transparent 55%)' }} />

      {/* Glowing horizontal lines */}
      <div className="absolute top-[18%] left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(30,214,195,0.25), transparent)' }} />
      <div className="absolute top-[50%] left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(46,240,209,0.12), transparent)' }} />
      <div className="absolute top-[82%] left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(30,214,195,0.15), transparent)' }} />

      {/* Diagonal light streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[140%] h-[30px] rotate-[25deg] opacity-[0.07]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(46,240,209,0.8) 40%, rgba(30,214,195,0.6) 60%, transparent 100%)' }} />
        <div className="absolute top-[30%] -left-[10%] w-[140%] h-[20px] rotate-[25deg] opacity-[0.05]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(30,214,195,0.8) 50%, transparent 100%)' }} />
        <div className="absolute top-[65%] -left-[10%] w-[140%] h-[25px] rotate-[25deg] opacity-[0.06]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(46,240,209,0.7) 45%, transparent 100%)' }} />
      </div>

      {/* ─── TOP BAR ─── */}
      <div className="relative px-6 pt-6 pb-2 flex items-center justify-between">
        <img
          src={imarticusLogo}
          alt="Imarticus Learning"
          className="h-8 w-auto object-contain drop-shadow-md"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border" style={{
          borderColor: 'rgba(30,214,195,0.25)',
          background: 'linear-gradient(135deg, rgba(30,214,195,0.12), rgba(46,240,209,0.06))',
        }}>
          <Video size={11} style={{ color: '#1ED6C3' }} />
          <span className="text-[9px] font-bold tracking-wider opacity-80">ZOOM SESSION</span>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <div className="relative px-6 pt-5 pb-5 text-center">
        <h1 className="text-[56px] font-black tracking-tighter leading-none mb-2">
          IBM{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1ED6C3 0%, #2EF0D1 50%, #1ED6C3 100%)',
              WebkitBackgroundClip: 'text',
            }}
          >
            AIPM
          </span>
        </h1>

        <span className="text-[11px] font-semibold tracking-[0.3em] uppercase opacity-50">Weekend Sessions</span>

        {/* Decorative divider with dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1ED6C3', boxShadow: '0 0 6px rgba(30,214,195,0.6)' }} />
          <div className="w-20 h-[1.5px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #1ED6C3, transparent)', boxShadow: '0 0 8px rgba(30,214,195,0.4)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#2EF0D1', boxShadow: '0 0 8px rgba(46,240,209,0.7)' }} />
          <div className="w-20 h-[1.5px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #1ED6C3, transparent)', boxShadow: '0 0 8px rgba(30,214,195,0.4)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1ED6C3', boxShadow: '0 0 6px rgba(30,214,195,0.6)' }} />
        </div>
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
                  background: 'linear-gradient(135deg, #1ED6C3, #2EF0D1)',
                  color: '#0A2F2F',
                  boxShadow: '0 0 10px rgba(30,214,195,0.4)',
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
              background: 'linear-gradient(135deg, rgba(30,214,195,0.08), rgba(10,47,47,0.6), rgba(30,214,195,0.05))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(30,214,195,0.25)',
              boxShadow: '0 0 25px rgba(30,214,195,0.12), inset 0 1px 0 rgba(46,240,209,0.1), 0 8px 32px rgba(10,47,47,0.3)',
            }}>
              {/* Date strip */}
              <div className="flex items-center gap-5 px-4 py-2.5 text-[10px] font-bold" style={{
                background: 'linear-gradient(90deg, rgba(30,214,195,0.15), rgba(10,47,47,0.4))',
                borderBottom: '1px solid rgba(30,214,195,0.12)',
              }}>
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} style={{ color: '#1ED6C3' }} /> {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} style={{ color: '#1ED6C3' }} /> {time}
                </span>
              </div>

              <div className="px-4 py-3.5 space-y-3">
                {/* Topic */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{
                    background: 'linear-gradient(135deg, rgba(30,214,195,0.2), rgba(46,240,209,0.1))',
                    border: '1px solid rgba(30,214,195,0.2)',
                    boxShadow: '0 0 12px rgba(30,214,195,0.15)',
                  }}>
                    <Icon size={15} style={{ color: '#1ED6C3' }} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-extrabold block leading-tight text-[13px]">{label}</span>
                    <span className="text-[10px] opacity-50 leading-relaxed mt-0.5 block">{desc}</span>
                  </div>
                </div>

                {/* Faculty */}
                <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{
                  background: 'rgba(30,214,195,0.06)',
                  border: '1px solid rgba(30,214,195,0.1)',
                }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{
                    background: 'linear-gradient(135deg, #1ED6C3, #2EF0D1)',
                    boxShadow: '0 0 8px rgba(30,214,195,0.35)',
                  }}>
                    <User size={11} style={{ color: '#0A2F2F' }} />
                  </div>
                  <div>
                    <span className="text-[8px] font-semibold tracking-[0.15em] uppercase opacity-40 block">Faculty</span>
                    <span className="font-bold text-[12px] leading-tight block">{faculty}</span>
                  </div>
                </div>

                {/* Zoom section — light grey panel */}
                <div className="rounded-lg p-3 space-y-2" style={{
                  background: 'linear-gradient(135deg, rgba(200,220,220,0.08), rgba(180,200,200,0.04))',
                  border: '1px solid rgba(30,214,195,0.1)',
                }}>
                  <div className="flex items-center gap-2">
                    <Video size={11} style={{ color: '#1ED6C3' }} className="shrink-0" />
                    <span className="text-[9px] font-semibold opacity-40 w-8 shrink-0">Zoom</span>
                    <a
                      href={zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-md text-[10px] font-bold tracking-wide transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #1ED6C3, #17B8A8)',
                        color: 'white',
                        boxShadow: '0 0 15px rgba(30,214,195,0.35)',
                      }}
                    >
                      Click Here
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
      <div className="relative px-6 py-4 text-center" style={{ borderTop: '1px solid rgba(30,214,195,0.1)' }}>
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase opacity-35">
          © Imarticus Learning · www.imarticus.org
        </span>
      </div>
    </div>
  );
};

const ZoomRow = ({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <Icon size={11} className="shrink-0" style={{ color: '#1ED6C3' }} />
    <span className="text-[9px] font-semibold opacity-40 w-8 shrink-0">{label}</span>
    <div className="font-semibold text-[11px]">{value}</div>
  </div>
);

export default SessionPoster;
