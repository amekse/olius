import axios from "axios";


export const fetchUsenameList = async(username: string): Promise<object> => {
    const res = await axios.get(`https://api.github.com/users/${username}/gists`);
    return res.data;
}