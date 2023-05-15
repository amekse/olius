import React, {useState} from "react";

type TSearchBarProps = {
    triggerSearch: (value: string) => Promise<void>
}

export const SearchBar = ({triggerSearch}: TSearchBarProps) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchOnClick = () => triggerSearch(searchValue);

    return (
        <div>
            <input onChange={e => setSearchValue(e.target.value)} value={searchValue} />
            <button onClick={handleSearchOnClick}>Search</button>
        </div>
    );
}