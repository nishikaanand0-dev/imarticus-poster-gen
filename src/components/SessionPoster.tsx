import { Monitor, TrendingUp, MessageCircle, Calendar, Clock, Video, KeyRound, Hash, type LucideIcon } from "lucide-react";
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
    <div className="w-[540px] rounded-2xl overflow-hidden shadow-[var(--poster-glow)] border border-border relative">
      {/* Header - compact */}
      <div
        className="relative px-6 pt-6 pb-5 text-primary-foreground overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--poster-header-from)) 0%, hsl(var(--poster-header-via)) 50%, hsl(var(--poster-header-to)) 100%)`,
        }}
      >
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-primary-foreground/5" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70 mb-1">Upcoming Session</p>
            <h1 className="text-2xl font-black tracking-tight leading-none">IBM AIPM</h1>
            <p className="text-[10px] opacity-70 mt-1">Faculty: <span className="font-bold opacity-100">Sanjoy Paul</span></p>
          </div>
          <img
            src={imarticusLogo}
            alt="Imarticus Learning"
            className="h-9 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{
          background: `linear-gradient(90deg, transparent 0%, hsl(var(--poster-gold)) 20%, hsl(var(--poster-gold-light)) 50%, hsl(var(--poster-gold)) 80%, transparent 100%)`,
        }} />
      </div>

      {/* Body - compact */}
      <div className="relative bg-card px-5 py-4 space-y-3">
        {sessions.map(({ day, date, time, icon: Icon, label, desc, zoomLink, meetingId, passcode }, idx) => (
          <div key={day} className="bg-secondary rounded-lg px-4 py-3 border border-border/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold tracking-[0.15em] uppercase text-muted-foreground">
                Session {idx + 1} — {day}
              </span>
              <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={10} className="text-primary" />
                  {date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={10} className="text-primary" />
                  {time}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={13} className="text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-card-foreground block leading-tight text-xs">{label}</span>
                <span className="text-[10px] text-muted-foreground leading-snug block">{desc}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] border-t border-border/50 pt-2">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Video size={10} className="text-primary" />
                <a href={zoomLink} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-2">
                  Click Here
                </a>
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Hash size={10} className="text-primary" />
                {meetingId}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <KeyRound size={10} className="text-primary" />
                {passcode}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer - slim */}
      <div
        className="px-6 py-2.5 text-center text-primary-foreground text-[10px] font-semibold tracking-wider"
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
  <div className="flex items-start gap-3">
    <div className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center shrink-0 mt-0.5">
      <Icon size={14} className="text-primary" />
    </div>
    <div>
      <span className="text-muted-foreground text-xs font-medium">{label}</span>
      <div className="text-card-foreground font-semibold">{value}</div>
    </div>
  </div>
);

export default SessionPoster;
