"use client";
import { lusitana } from "@/components/ui/fonts";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef, JSX } from "react";
import { FiFilter } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";

export function SortingButtons({ locale }: { locale: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [selectedSortBy, setSelectedSortBy] = useState("price");
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    const params = new URLSearchParams(searchParams);

    const queryParam = params.get("query");
    if (queryParam) {
      params.set("query", queryParam);
    }

    params.set("sortBy", selectedSortBy);
    params.set("order", selectedOrder);
    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());

    replace(`${pathname}?${params.toString()}`);
    setMenuOpen(false);
  };

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);

    const queryParam = params.get("query");
    params.delete("sortBy");
    params.delete("order");
    params.delete("minPrice");
    params.delete("maxPrice");
    if (queryParam) {
      params.set("query", queryParam);
    }

    replace(`${pathname}?${params.toString()}`);
    setMinPrice(0);
    setMaxPrice(1000000);
    setSelectedSortBy("price");
    setSelectedOrder("asc");
    setMenuOpen(false);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortBy(e.target.value);
  };
  const handleOrderChange = (order: string) => {
    setSelectedOrder(order);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setMinPrice(Number(params.get("minPrice") || 0));
    setMaxPrice(Number(params.get("maxPrice") || 1000000));
    setSelectedSortBy(params.get("sortBy") || "price");
    setSelectedOrder(params.get("order") || "asc");
  }, [searchParams]);

  return (
    <div className={`${lusitana.className} w-full`}>
      <button
        className="hover:text-[#ffa552] p-3 my-2 sm:justify-between justify-center py-2 bg-[#222e46] text-white rounded-lg flex items-center w-full "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="pr-3">{locale === "ka" ? "ფილტრი" : "Filter"}</span>
        <FiFilter />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="text-black dark:text-[#f0eff4] absolute mt-2 p-4 bg-white dark:bg-stone-800 border rounded-lg shadow-lg z-10"
        >
          <div>
            <b>Sort By:</b>
            <select
              value={selectedSortBy}
              onChange={handleDropdownChange}
              className="block w-full mt-2 p-2 border rounded-lg"
            >
              <option value="price">Price</option>
              <option value="title_en">Title</option>
            </select>
          </div>
          <div className="mt-4">
            <b>Order:</b>
            <div className="flex gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedOrder === "asc"
                    ? "bg-[#86cd82] text-[#f0eff4] "
                    : "bg-[#f0eff4] text-black"
                }`}
                onClick={() => handleOrderChange("asc")}
              >
                Asc ↑
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedOrder === "desc"
                    ? "bg-[#86cd82] text-[#f0eff4] "
                    : "bg-[#f0eff4] text-black"
                }`}
                onClick={() => handleOrderChange("desc")}
              >
                Desc ↓
              </button>
            </div>
          </div>
          <div className="mt-4">
            <b>min Price:</b>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Math.max(0, Number(e.target.value)))}
              className="block w-full mt-2 p-2 border rounded-lg"
            />
          </div>
          <div className="mt-4">
            <b>max Price:</b>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Math.max(0, Number(e.target.value)))}
              className="block w-full mt-2 p-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-[#f0eff4] rounded-lg dark:bg-[#f0eff4] text-black transition-transform duration-300 ease-in-out active:scale-95"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className="px-4 py-2 bg-[#86cd82] text-[#f0eff4] rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out active:scale-95"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Search(): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setQuery(params.get("query") || "");
  }, [searchParams]);

  const clearSearch = () => {
    setQuery("");
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="my-2 relative w-full">
      <input
        className={`bg-stone-100 dark:bg-stone-500 text-stone-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-200 w-full px-4 py-2 rounded-lg pr-10 ${lusitana.className}`}
        placeholder="search"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          handleSearch(value);
        }}
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:text-gray-200 dark:hover:text-blue-200"
        >
          ✕
        </button>
      )}
    </div>
  );
}
