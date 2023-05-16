import React, { useCallback, useEffect, useState } from "react";
import { uiCombinedDataSchema, filesUiDataSchema, forksUiDataSchema } from '../../schematics/gistApiResults';

type TGistTabProps = {
    item: uiCombinedDataSchema
}

const GistTab = ({item}:TGistTabProps) => {
    const FileTab = ({file}: {file: filesUiDataSchema}) => {
        return (
            <div className="flex flex-col justify-start items-start">
                <span onClick={() => window.open(file.link, '_blank', 'noopener,noreferrer')} className="font-bold mb-2 text-lg">{file.filename} &#128279;</span>
                <div className="mb-2 text-center border-2 border-cyan-300 rounded px-2 h-8">
                    <span className="font-thin">&#127991; {file.tags}</span>
                </div>
                <span className="mb-2 font-light">Language: {file.lang_type}</span>
            </div>
        )
    };

    const ForkTab = ({fork}: {fork: forksUiDataSchema}) => {
        return (
            <div className="ml-2 rounded border-2 border-cyan-800 flex flex-row justify-start items-center" onClick={() => window.open(fork.user_profile_link, '_blank', 'noopener,noreferrer')}>
                <img width={25} height={25} alt={fork.username} src={fork.avatar} />
                <span className="mx-1 font-thin">{fork.username} &#128279;</span>
            </div>
        )
    };
    
    return (
        <div className="border-2 p-2 border-white rounded w-full text-white flex flex-col justify-start items-start mt-4">
            <div>
                {item?.files.map((file, index) => <FileTab key={`${index}${file.filename}`} file={file} />) || <span>No Data</span>}
            </div>
            {
                (item?.forks.length || 0) > 0 ?
                <div className="flex flex-row justify-start items-center mt-2">
                    Forks:
                    {item.forks.map((fork, index) => (index < 3) ? <ForkTab key={`${index}${fork.username}`} fork={fork} /> : null)}
                </div> : <span className="font-thin text-xs">0 Forks</span>
            }
        </div>
    )
}

export default GistTab;