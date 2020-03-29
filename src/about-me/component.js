import {user} from "./user";

export default class AboutMe extends HTMLElement {
    constructor() {
        super();
        this.innerHTML=`
        <img src="${user.avatar_url}">
        <p>${user.bio}</p>`;
    }


}