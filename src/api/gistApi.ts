import axios from "axios";
import { gistApiDataSchema, forksApiDataScheme } from '../schematics/gistApiResults';

export const fetchForkList = async(forkUrl: string): Promise<forksApiDataScheme[]> => {
    let res: {data?: forksApiDataScheme[]} = {};
    try {
        res = await axios.get(forkUrl);
    } catch (err) {
        console.log(err);
    } finally {
        return res.data !== undefined ? res.data : [];
    }
}

export const fetchUsenameList = async(username: string): Promise<gistApiDataSchema[]> => {
    let res: {data?: gistApiDataSchema[]} = {};
    try {
        res = await axios.get(`https://api.github.com/users/${username}/gists`);
    } catch (err) {
        console.log(err);
    } finally {
        return res.data !== undefined ? res.data : [];
    }
}