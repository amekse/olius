import React from "react";
import { uiCombinedDataSchema, filesUiDataSchema, forksUiDataSchema } from '../../schematics/gistApiResults';
import Image from 'next/image';

type TGistTabProps = {
    item: uiCombinedDataSchema
}

export const GistTab = ({item}:TGistTabProps) => {
    const FileTab = ({file}: {file: filesUiDataSchema}) => {
        return (
            <div>
                <span>{file.filename}</span>
                <span>{file.tags}</span>
                <span>{file.lang_type}</span>
            </div>
        )
    };

    const ForkTab = ({fork}: {fork: forksUiDataSchema}) => {
        return (
            <div>
                <Image alt="user avatar" src={fork.avatar} />
            </div>
        )
    };

    return (
        <div>
            <div>
                {item.files.map((file, index) => <FileTab key={`${index}${file.filename}`} file={file} />)}
            </div>
            <div>
                {item.forks.map((fork, index) => <ForkTab key={`${index}${fork.username}`} fork={fork} />)}
            </div>
        </div>
    )
}