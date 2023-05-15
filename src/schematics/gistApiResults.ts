import { fetchUsenameList } from '../api/gistApi';

export const fetchGistByUsername = async(username: string): Promise<object> => {
    return await fetchUsenameList(username);
}