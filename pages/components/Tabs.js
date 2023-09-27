export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-4 mb-4">
      {tabs.map((tabName) => (
        <span
          className={`text-lg cursor-pointer ${
            tabName === active ? "text-black border-b-2 border-black" : "text-gray-800"
          }`}
          onClick={() => onChange(tabName)}
          key={tabName}
        >
          {tabName}
        </span>
      ))}
    </div>
  );
}
