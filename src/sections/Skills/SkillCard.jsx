
export default function SkillCard({ title, items, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-[#e8e0d1] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{icon}</span>
        <h3 className="text-lg font-semibold text-[#3a2f2a]">{title}</h3>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-sm text-[#5a4a42] flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9b79c]" />
            {typeof item === "string" ? item : `${item.name} - ${item.level}`}
          </li>
        ))}
      </ul>
    </div>
  );
}