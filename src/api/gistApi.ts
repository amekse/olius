import axios from "axios";
import { gistApiDataSchema, forksApiDataScheme } from '../schematics/gistApiResults';

const axiosConfig = { headers: {
    'Authorization': 'Bearer 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', 
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
}}

export const fetchForkList = async(forkUrl: string): Promise<forksApiDataScheme[]> => {
    let res: {data?: forksApiDataScheme[]} = {};
    try {
        res = await axios.get(forkUrl, axiosConfig);
    } catch (err) {
        console.log(err);
    } finally {
        return res.data !== undefined ? res.data : [];
    }
}

export const fetchUsenameList = async(username: string): Promise<gistApiDataSchema[]> => {
    let res: {data?: gistApiDataSchema[]} = {};
    try {
        res = await axios.get(`https://api.github.com/users/${username}/gists`, axiosConfig);
    } catch (err) {
        console.log(err);
    } finally {
        return res.data !== undefined ? res.data : [];
    }
}