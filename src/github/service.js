import {GitHubUser} from "./model";

export async function getUser(name)// async zwraca Promise
{
    try {
        const response = await fetch(`https://api.github.com/users/${name}`);
        return new GitHubUser(await response.json());
    }catch(e)
    {
        console.warn(e);
        return new GitHubUser();
    }
}