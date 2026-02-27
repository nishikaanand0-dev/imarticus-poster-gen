import { Monitor, TrendingUp, MessageCircle, Calendar, Clock, Video, KeyRound, Hash, type LucideIcon } from "lucide-react";
import imarticusLogo from "@/assets/imarticus-logo.png";

const SessionPoster = () => {
  const agendaItems = [
    { icon: Monitor, label: "Query Resolving" },
    { icon: TrendingUp, label: "Career Guidance" },
    { icon: MessageCircle, label: "Discussion" },
  ];

  return (
    <div className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-[var(--poster-glow)] border border-border">
      {/* Header with gradient */}
      <div
        className="px-8 pt-8 pb-6 text-primary-foreground"
        style={{ background: "var(--poster-gradient)" }}
      >
        <div className="flex justify-center mb-5">
          <img
            src={imarticusLogo}
            alt="Imarticus Learning"
            className="h-16 object-contain brightness-0 invert"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest uppercase opacity-80 mb-1">
            Upcoming Session
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
            IIT Roorkee HRMA 05
          </h1>
        </div>
      </div>

      {/* Date & Time strip */}
      <div className="bg-accent text-accent-foreground flex items-center justify-center gap-8 py-3 px-6 text-sm font-semibold">
        <span className="flex items-center gap-2">
          <Calendar size={16} />
          25-Feb-2026 (Wednesday)
        </span>
        <span className="flex items-center gap-2">
          <Clock size={16} />
          9:00 PM – 10:30 PM
        </span>
      </div>

      {/* Body */}
      <div className="bg-card px-8 py-8 space-y-7">
        {/* Agenda Section */}
        <div>
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
            Session Agenda
          </h2>
          <div className="space-y-3">
            {agendaItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-secondary rounded-xl px-5 py-3.5 transition-shadow hover:shadow-[var(--poster-card-shadow)]"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="font-semibold text-card-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Meeting Details */}
        <div>
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
            Meeting Details
          </h2>
          <div className="space-y-3 text-sm">
            <DetailRow
              icon={Video}
              label="Session Link"
              value={
                <a
                  href="https://zoom.us/j/92218782880?pwd=HqCfPzETbQl7sZ47slebxs5RBs9RMT.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline underline-offset-2 break-all"
                >
                  Join Zoom Meeting
                </a>
              }
            />
            <DetailRow icon={Hash} label="Meeting ID" value="922 1878 2880" />
            <DetailRow icon={KeyRound} label="Passcode" value="0000" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-8 py-4 text-center text-primary-foreground text-xs font-medium tracking-wide opacity-90"
        style={{ background: "var(--poster-gradient)" }}
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
    <Icon size={16} className="text-muted-foreground mt-0.5 shrink-0" />
    <div>
      <span className="text-muted-foreground">{label}: </span>
      <span className="text-card-foreground font-medium">{typeof value === "string" ? value : value}</span>
    </div>
  </div>
);

export default SessionPoster;
