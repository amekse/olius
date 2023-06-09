import { fetchUsenameList, fetchForkList } from '../api/gistApi';

export type forksUiDataSchema = {
    avatar: string,
    username: string,
    user_profile_link: string
}

export type filesUiDataSchema = {
    filename: string,
    tags: string,
    lang_type: string,
    link: string
}

export type uiCombinedDataSchema = {
    id: string,
    files: filesUiDataSchema[],
    forks: forksUiDataSchema[]
}

export type forksApiDataScheme = {
    owner: {
        login: string,
        avatar_url: string,
        html_url: string
    }
}

export type gistApiDataSchema = {
    id: string,
    forks_url: string,
    files: {
        [key: string]: {
            filename: string,
            language: string,   
            raw_url: string
        }
    }
}

const fetchForkByUrl = async(forkUrl:string) => {
    const forkDetails = await fetchForkList(forkUrl);
    return forkDetails.map(fork => {
        return {
            avatar: fork.owner.avatar_url,
            username: fork.owner.login,
            user_profile_link: fork.owner.html_url
        }
    });
}

export const fetchGistByUsername = async(username: string): Promise<uiCombinedDataSchema[]> => {
    const userGistListRaw = await fetchUsenameList(username);
    return await Promise.all(userGistListRaw.map(async(item) => {
        const returnableData: uiCombinedDataSchema = {
            id: item.id,
            files: [],
            forks: await fetchForkByUrl(item.forks_url)
        };
        returnableData.files = Object.keys(item.files).map((fileName:string) => {
            const filePrintableName = item.files[fileName].filename.split('.');
            return {
                filename: filePrintableName[0],
                tags: filePrintableName[filePrintableName.length-1],
                lang_type: item.files[fileName].language,
                link: item.files[fileName].raw_url
            }
        });
        return returnableData;
    }));
}