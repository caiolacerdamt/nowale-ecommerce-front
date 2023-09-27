function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 rounded-md ${
            active === tab ? "bg-gray-900 text-white" : "bg-gray-200"
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
