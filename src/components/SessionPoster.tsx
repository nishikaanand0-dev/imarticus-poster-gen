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
    <div className="w-[540px] rounded-3xl overflow-hidden shadow-[var(--poster-glow)] border border-border relative">
      {/* Subtle academic background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header with deep blue gradient */}
      <div
        className="relative px-8 pt-10 pb-8 text-primary-foreground overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--poster-header-from)) 0%, hsl(var(--poster-header-via)) 50%, hsl(var(--poster-header-to)) 100%)`,
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary-foreground/5" />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <img
              src={imarticusLogo}
              alt="Imarticus Learning"
              className="h-12 w-auto object-contain drop-shadow-lg"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase opacity-70 mb-2">
              Upcoming Session
            </p>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight drop-shadow-sm">
              IBM AIPM
            </h1>
          </div>
        </div>

        {/* Gold accent divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{
          background: `linear-gradient(90deg, transparent 0%, hsl(var(--poster-gold)) 20%, hsl(var(--poster-gold-light)) 50%, hsl(var(--poster-gold)) 80%, transparent 100%)`,
        }} />
      </div>

      {/* Body */}
      <div className="relative bg-card px-6 py-6 space-y-5">
        {/* Faculty */}
        <div className="flex items-center gap-3 bg-secondary rounded-xl px-5 py-3 border border-border/50">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <MessageCircle size={14} className="text-primary-foreground" />
          </div>
          <div>
            <span className="text-muted-foreground text-xs font-medium">Faculty</span>
            <span className="font-bold text-card-foreground block text-sm leading-tight">Sanjoy Paul</span>
          </div>
        </div>

        {/* Session Schedule */}
        {sessions.map(({ day, date, time, icon: Icon, label, desc, zoomLink, meetingId, passcode }, idx) => (
          <div key={day}>
            <h2 className="text-xs font-extrabold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Session {idx + 1} — {day}
            </h2>
            <div className="bg-secondary rounded-xl px-5 py-4 shadow-[var(--poster-card-shadow)] border border-border/50 space-y-3">
              <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-primary" />
                  {time}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Icon size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <span className="font-bold text-card-foreground block leading-tight text-sm">{label}</span>
                  <span className="text-xs text-muted-foreground leading-relaxed">{desc}</span>
                </div>
              </div>

              {/* Zoom details per session */}
              <div className="border-t border-border/50 pt-3 space-y-2 text-sm">
                <DetailRow
                  icon={Video}
                  label="Zoom Link"
                  value={
                    <a
                      href={zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary break-all transition-colors text-xs"
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
        ))}
      </div>

      {/* Footer */}
      <div
        className="px-8 py-4 text-center text-primary-foreground text-xs font-semibold tracking-wider"
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
