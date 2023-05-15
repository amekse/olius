import React, {useState} from "react";
import { SearchBar } from "../seach-bar/search-bar";
import { fetchGistByUsername } from '../../schematics/gistApiResults';

export const Home = () => {
    const [gistList, setGistList] = useState<object>([]);
    const triggerSearch = async (usename: string) => {
        setGistList(await fetchGistByUsername(usename));
    };

    return (
        <div className="bg-slate-900 w-screen h-screen p-8 flex flex-col justify-start items-center">
            <SearchBar triggerSearch={triggerSearch} />
            {JSON.stringify(gistList)}
        </div>
    );
}