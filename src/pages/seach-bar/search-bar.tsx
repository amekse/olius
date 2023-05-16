import React, {useState} from "react";

type TSearchBarProps = {
    triggerSearch: (value: string) => Promise<void>
}

const SearchBar = ({triggerSearch}: TSearchBarProps) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchOnClick = () => triggerSearch(searchValue);

    return (
        <div className="flex flex-row justify-start items-center">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search Username" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
            <button className="py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSearchOnClick}>&#128269;</button>
        </div>
    );
}

export default SearchBar;