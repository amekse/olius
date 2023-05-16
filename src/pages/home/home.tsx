import React, {useState} from "react";
import SearchBar from "../seach-bar/search-bar";
import { fetchGistByUsername, uiCombinedDataSchema } from '../../schematics/gistApiResults';
import GistTab from "../gist-tab/gist-tab";

const Home = () => {
    const [gistList, setGistList] = useState<uiCombinedDataSchema[]>([]);
    const [loading, setLoadingStatus] = useState<boolean>(false);
    const triggerSearch = async (usename: string) => {
        setLoadingStatus(true);
        setGistList(await fetchGistByUsername(usename));
        setLoadingStatus(false);
    };

    return (
        <div className="bg-slate-900 w-screen h-screen p-8 flex flex-col justify-start items-center">
            <SearchBar triggerSearch={triggerSearch} />
            {
                loading ? <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" className="m-8" width={20} height={20} /> : null
            }
            <div className="w-5/6 h-5/6 mt-8 overflow-auto">
                {gistList.map((item: uiCombinedDataSchema, index) => <GistTab key={`${index}${item.id}`} item={item} />)}
            </div>
        </div>
    );
}

export default Home;