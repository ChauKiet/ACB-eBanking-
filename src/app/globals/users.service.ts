import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor() { }

    public token = {

        key: "tokenUsers",

        set: (token) => {
            window.localStorage.setItem(this.token.key, token);
        },
        remove: () => {
            window.localStorage.removeItem(this.token.key);
        },
        get: () => {
            return window.localStorage.getItem(this.token.key);
        },
        check : () => {
            return window.localStorage.hasOwnProperty(this.token.key);
        }
    }

    public info = {

        key: "localStorage",

        set: (data) => {
            data = typeof data === 'object' ? JSON.stringify(data) : data;
            window.localStorage.setItem(this.info.key, data);
        },
        remove: () => {
            window.localStorage.removeItem(this.info.key);
        },
        get: () => {
            try {
                if (window.localStorage.getItem(this.info.key)) {
                    let data = window.localStorage.getItem(this.info.key);
                    return JSON.parse(data);
                } else {
                    return {};
                }

            } catch (error) {
                return {};
            }

        }
    }
}
