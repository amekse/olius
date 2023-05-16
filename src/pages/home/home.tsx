import React, {useState} from "react";
import { SearchBar } from "../seach-bar/search-bar";
import { fetchGistByUsername, uiCombinedDataSchema } from '../../schematics/gistApiResults';

export const Home = () => {
    const [gistList, setGistList] = useState<uiCombinedDataSchema[]>([]);
    const triggerSearch = async (usename: string) => {
        setGistList(await fetchGistByUsername(usename));
    };

    return (
        <div className="bg-slate-900 w-screen h-screen p-8 flex flex-col justify-start items-center">
            <SearchBar triggerSearch={triggerSearch} />
            <div className="bg-white">
                {gistList.map((item: uiCombinedDataSchema):any => (<div key={item.id}>
                    {JSON.stringify(item)}
                </div>))}
            </div>
        </div>
    );
}