import { useState } from "react";
import { Place } from "../Places/Place";

type PlaceItem = {
  id: string;
  image: string;
  title: string;
  description: string;
};

type SearchableListType = {
  items: PlaceItem[];
};

export function SearchableList({ items }: SearchableListType) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>
            <Place item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
