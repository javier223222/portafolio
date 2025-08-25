export default function LevelDots({ level = 4, max = 5 }: { level?: number; max?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${i < level ? 'bg-blue-500' : 'bg-white/15'}`}
        />
      ))}
    </div>
  );
}