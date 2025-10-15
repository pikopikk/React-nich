import { RiSearchLine, RiCloseLine, RiQuillPenFill, RiStarFill } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export default function SearchMenuBar({ query, setQuery, activeFilters, setActiveFilters }) {
  const filterOption = [
    {
      icon: <RiQuillPenFill className="w-5 h-5" />,
      title: "Signature",
      color: "#747934",
    },
    {
      icon: <RiStarFill className="w-5 h-5" />,
      title: "Best",
      color: "#c99b5f",
    },
  ];

  const handleFilterClick = (title) => {
    setActiveFilters((prev) =>
      prev.includes(title) ? prev.filter((f) => f !== title) : [...prev, title]
    );
  };

  const navigate = useNavigate()
  const handleCancel = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };


  return (
    <div className="flex flex-col-reverse gap-3 bg-gradient-to-r from-white to-[#F1F0E4] py-4 px-5">
      {/* Filter Option */}
      <div className="flex justify-center gap-4">
        {filterOption.map((option, index) => {
          const isActive = activeFilters.includes(option.title);
          return (
            <button
              key={index}
              onClick={() => handleFilterClick(option.title)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full font-semibold transition-all duration-200 btn-press"
              style={{
                backgroundColor: isActive ? option.color : "#F9F9F4",
                color: isActive ? "white" : option.color,
                border: `1.5px solid ${option.color}`,
                transform: isActive ? "scale(0.95)" : "scale(1)",
                boxShadow: isActive
                  ? `0 4px 8px ${option.color}55`
                  : "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {option.icon}
              {option.title}
            </button>
          );
        })}
      </div>

      {/* Search Bar + Batal */}
      <div className="w-full flex flex-row gap-4 justify-center items-center">
        <div className="flex items-center w-[90%] max-w-md bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <RiSearchLine className="text-gray-500 w-5 h-5 mr-2 btn-press" />
          <input
            type="text"
            placeholder="Cari menu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base bg-transparent outline-none text-stone-800 placeholder-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <RiCloseLine className="w-5 h-5 btn-press" />
            </button>
          )}
        </div>

        <button onClick={handleCancel}>
          <div className="badge badge-outline text-[#3E3F29] font-bold btn-press">
            Batal
          </div>
        </button>
      </div>
    </div>
  );
}
