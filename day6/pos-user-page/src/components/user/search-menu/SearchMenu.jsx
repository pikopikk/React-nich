import { useState } from "react";
import SearchMenuBar from "./SearchMenuBar";
import { menus } from "../../../data/menu";
import CardMenu from "../CardMenu";

export default function SearchMenu() {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]); // multi-filter

  const filteredMenus = menus.filter((item) => {
    const matchQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) || query === "";
    
     // cek apakah tombol filter aktif (Signature / Best)
    const matchFilter =
      activeFilters.length === 0 ||
      activeFilters.some((filter) =>
        filter === "Signature"
          ? item.isSignature
          : filter === "Best"
          ? item.isBest
          : false
      );

      return matchQuery && matchFilter;
  });

  const showResults = query.trim() !== "" || activeFilters.length > 0;

  return (
    <section className="min-h-screen bg-[#F1F0E4] w-full  mt-[64px]">
      <SearchMenuBar
        query={query}
        setQuery={setQuery}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      {showResults ? (
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 p-5 w-full">
          {filteredMenus.length > 0 ? (
            filteredMenus.map((item, index) => (
              <CardMenu 
                key={index}
                className="w-40"
                {...item}
              />
            ))
          ) : (
            <p className="text-center text-stone-600 col-span-full mt-10">
              Tidak ada hasil ditemukan.
            </p>
          )}
        </div>
      ) : (
        <NoSearchYet />
      )}
    </section>
  );
}


function NoSearchYet(){
  return(
    <div className="w-full text-center pt-5 text-stone-600 text-sm">
      <p>
        Silahkan cari menu terlebih dahulu.
      </p>
    </div>
  )
}