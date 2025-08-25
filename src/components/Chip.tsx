export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center h-9 px-3.5 rounded-full border border-white/12 text-[13px] text-gray-200 bg-white/5 hover:bg-white/10 transition whitespace-nowrap">
      {children}
    </span>
  );
}
