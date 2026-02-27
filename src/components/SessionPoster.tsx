import { Monitor, TrendingUp, MessageCircle, Calendar, Clock, Video, KeyRound, Hash, type LucideIcon } from "lucide-react";
import imarticusLogo from "@/assets/imarticus-logo.png";

const SessionPoster = () => {
  const agendaItems = [
    { icon: Monitor, label: "Query Resolving", desc: "Get your doubts cleared by experts" },
    { icon: TrendingUp, label: "Career Guidance", desc: "Plan your next career move" },
    { icon: MessageCircle, label: "Discussion", desc: "Interactive peer-to-peer learning" },
  ];

  return (
    <div className="w-full max-w-[620px] rounded-3xl overflow-hidden shadow-[var(--poster-glow)] border border-border relative">
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
              className="h-20 w-auto object-contain brightness-0 invert drop-shadow-lg"
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase opacity-70 mb-2">
              Upcoming Session
            </p>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight drop-shadow-sm">
              IIT Roorkee HRMA 05
            </h1>
          </div>
        </div>

        {/* Gold accent divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{
          background: `linear-gradient(90deg, transparent 0%, hsl(var(--poster-gold)) 20%, hsl(var(--poster-gold-light)) 50%, hsl(var(--poster-gold)) 80%, transparent 100%)`,
        }} />
      </div>

      {/* Date & Time strip */}
      <div className="bg-secondary text-secondary-foreground flex flex-wrap items-center justify-center gap-6 md:gap-10 py-4 px-6 text-sm font-bold border-b border-border">
        <span className="flex items-center gap-2.5">
          <Calendar size={18} className="text-primary" />
          25-Feb-2026 (Wednesday)
        </span>
        <span className="flex items-center gap-2.5">
          <Clock size={18} className="text-primary" />
          9:00 PM – 10:30 PM
        </span>
      </div>

      {/* Body */}
      <div className="relative bg-card px-8 py-8 space-y-7">
        {/* Agenda Section */}
        <div>
          <h2 className="text-xs font-extrabold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Session Agenda
          </h2>
          <div className="space-y-3">
            {agendaItems.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-secondary rounded-xl px-5 py-4 shadow-[var(--poster-card-shadow)] hover:shadow-[var(--poster-card-hover)] transition-all duration-300 border border-border/50"
              >
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-sm">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <span className="font-bold text-card-foreground block leading-tight">{label}</span>
                  <span className="text-xs text-muted-foreground">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <div className="w-2 h-2 rounded-full" style={{ background: `hsl(var(--poster-gold))` }} />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Meeting Details */}
        <div>
          <h2 className="text-xs font-extrabold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Meeting Details
          </h2>
          <div className="space-y-3.5 text-sm">
            <DetailRow
              icon={Video}
              label="Session Link"
              value={
                <a
                  href="https://zoom.us/j/92218782880?pwd=HqCfPzETbQl7sZ47slebxs5RBs9RMT.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary break-all transition-colors"
                >
                  Join Zoom Meeting →
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
