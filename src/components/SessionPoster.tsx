import {
  Monitor,
  TrendingUp,
  MessageCircle,
  Calendar,
  Clock,
  Video,
  KeyRound,
  Hash,
  Zap,
  Brain,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import imarticusLogo from "@/assets/imarticus-logo.svg";

const SessionPoster = () => {
  const sessions = [
    {
      day: "Saturday",
      date: "7-Feb-2026",
      time: "4:00 PM – 7:00 PM",
      icon: Monitor,
      label: "Introduction to Product Management",
      desc: "Role, Lifecycle, Career Paths",
      zoomLink:
        "https://zoom.us/meeting/register/HFuHH_IwQJSaTNjFMY2Ybw",
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
      zoomLink:
        "https://zoom.us/meeting/register/7nNu_SuwRRCXFFhZoWn9EQ",
      meetingId: "959 4391 3905",
      passcode: "0000",
    },
  ];

  return (
    <div className="w-[540px] rounded-2xl overflow-hidden shadow-[var(--poster-glow)] border border-border relative bg-card">
      {/* Tech circuit SVG pattern background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="2" fill="currentColor" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
            <circle cx="80" cy="0" r="1.5" fill="currentColor" />
            <circle cx="0" cy="80" r="1.5" fill="currentColor" />
            <circle cx="80" cy="80" r="1.5" fill="currentColor" />
            <line x1="40" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="40" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="40" y2="40" stroke="currentColor" strokeWidth="0.3" />
            <line x1="80" y1="80" x2="40" y2="40" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* ─── HEADER ─── */}
      <div
        className="relative px-8 pt-8 pb-10 text-primary-foreground overflow-hidden"
        style={{
          background: `linear-gradient(160deg, hsl(var(--poster-header-from)) 0%, hsl(var(--poster-header-via)) 40%, hsl(var(--poster-header-to)) 100%)`,
        }}
      >
        {/* Decorative geometric shapes */}
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full border border-primary-foreground/10" />
        <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border border-primary-foreground/5" />
        <div className="absolute bottom-4 -left-10 w-28 h-28 rounded-full bg-primary-foreground/[0.04]" />
        <div className="absolute top-6 left-6 w-16 h-16 rounded-lg rotate-45 border border-primary-foreground/[0.06]" />

        {/* Floating tech icons */}
        <Brain size={18} className="absolute top-8 right-12 text-primary-foreground/10" />
        <Zap size={14} className="absolute bottom-12 right-20 text-primary-foreground/10" />

        <div className="relative z-10 text-center">
          <img
            src={imarticusLogo}
            alt="Imarticus Learning"
            className="h-10 w-auto object-contain mx-auto mb-5 drop-shadow-md"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <p className="text-[10px] font-bold tracking-[0.35em] uppercase opacity-60 mb-3">
            Upcoming Masterclass
          </p>

          <h1 className="text-4xl font-black tracking-tight leading-none mb-2">
            IBM <span style={{ color: `hsl(var(--poster-gold-light))` }}>AIPM</span>
          </h1>

          <p className="text-sm font-medium opacity-70 tracking-wide">
            AI-Powered Product Management
          </p>
        </div>

        {/* Gold accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, transparent 0%, hsl(var(--poster-gold)) 15%, hsl(var(--poster-gold-light)) 50%, hsl(var(--poster-gold)) 85%, transparent 100%)`,
          }}
        />
      </div>

      {/* ─── BODY ─── */}
      <div className="relative px-6 py-6 space-y-4">
        {/* Faculty badge */}
        <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3 border border-border/50">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, hsl(var(--poster-header-from)), hsl(var(--poster-header-to)))`,
            }}
          >
            <MessageCircle size={14} className="text-primary-foreground" />
          </div>
          <div>
            <span className="text-muted-foreground text-[10px] font-semibold tracking-wider uppercase">
              Faculty
            </span>
            <span className="font-bold text-card-foreground block text-sm leading-tight">
              Sanjoy Paul
            </span>
          </div>
        </div>

        {/* Session cards */}
        {sessions.map(
          (
            { day, date, time, icon: Icon, label, desc, zoomLink, meetingId, passcode },
            idx
          ) => (
            <div key={day} className="space-y-2">
              <div className="flex items-center gap-2 px-1">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black text-primary-foreground"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--poster-header-from)), hsl(var(--poster-header-to)))`,
                  }}
                >
                  {idx + 1}
                </div>
                <h2 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-muted-foreground">
                  Session {idx + 1} — {day}
                </h2>
              </div>

              <div className="rounded-xl border border-border/60 bg-secondary/50 overflow-hidden">
                {/* Date / time strip */}
                <div
                  className="flex items-center gap-5 px-4 py-2.5 text-[11px] font-bold text-primary-foreground"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--poster-header-from)) 0%, hsl(var(--poster-header-via)) 100%)`,
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {time}
                  </span>
                </div>

                <div className="px-4 py-4 space-y-3">
                  {/* Topic */}
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--poster-header-from)), hsl(var(--poster-header-to)))`,
                      }}
                    >
                      <Icon size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="font-bold text-card-foreground block leading-tight text-sm">
                        {label}
                      </span>
                      <span className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 block">
                        {desc}
                      </span>
                    </div>
                  </div>

                  {/* Zoom details */}
                  <div className="border-t border-border/40 pt-3 space-y-2">
                    <DetailRow
                      icon={Video}
                      label="Zoom Link"
                      value={
                        <a
                          href={zoomLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary break-all transition-colors text-xs"
                          style={{ color: `hsl(var(--poster-header-via))` }}
                        >
                          Click Here
                        </a>
                      }
                    />
                    <DetailRow icon={Hash} label="Meeting ID" value={meetingId} />
                    <DetailRow icon={KeyRound} label="Passcode" value={passcode} />
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* CTA */}
        <a
          href={sessions[0].zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-sm font-bold text-primary-foreground tracking-wide shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          style={{
            background: `linear-gradient(135deg, hsl(var(--poster-header-from)) 0%, hsl(var(--poster-header-via)) 50%, hsl(var(--poster-header-to)) 100%)`,
          }}
        >
          <Rocket size={16} />
          Don't Miss the Masterclass — Join Now
        </a>
      </div>

      {/* ─── FOOTER ─── */}
      <div
        className="px-8 py-3.5 text-center text-primary-foreground/80 text-[10px] font-semibold tracking-widest uppercase"
        style={{
          background: `linear-gradient(135deg, hsl(var(--poster-header-from)) 0%, hsl(var(--poster-header-via)) 100%)`,
        }}
      >
        © Imarticus Learning · www.imarticus.org
      </div>
    </div>
  );
};

const DetailRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-center gap-2.5">
    <div className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center shrink-0">
      <Icon size={12} className="text-muted-foreground" />
    </div>
    <span className="text-muted-foreground text-[10px] font-semibold w-16 shrink-0">{label}</span>
    <div className="text-card-foreground font-semibold text-xs">{value}</div>
  </div>
);

export default SessionPoster;
