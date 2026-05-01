import { ReactNode } from "react";

type PentacoreSectionShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PentacoreSectionShell({
  children,
  className = "",
}: PentacoreSectionShellProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] border border-violet-400/25 bg-[#06051a] p-6 md:p-10 shadow-[0_0_60px_rgba(124,58,237,0.2)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.22),transparent_45%)]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
