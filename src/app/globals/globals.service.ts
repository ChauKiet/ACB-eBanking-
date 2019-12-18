import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';
export class requetsGlobals { action: string; params?: Object; path: string; data?: Object; client?: boolean; method?: boolean }
export class responseGlobals { action: string; status?: string; message?: string; data?: any; query?: any }
import { UsersService } from "./users.service";
// import 'clientjs';
// declare let ClientJS: any;
export class GetRequets { path: string; action: string; params?: Object; prefix?: string }

export class PostRequets { path: string; action: string; params?: Object; data?: Object; prefix?: string }
@Injectable({
    providedIn: 'root'
})
export class GlobalsService {
    public deviceId: any;

    public BASE_API_URL: string = 'https://cors-anywhere.herokuapp.com/';
    public PREFIX_API_URL = 'https://app.timo.vn/';

    private response = new Subject<responseGlobals>();

    public result = this.response.asObservable();

    public user: UsersService = new UsersService();

    constructor(public http: HttpClient, public router: Router) {
    }

    public send(option: requetsGlobals) {

        if (option.action) {

            if (option.client) {

                let response: responseGlobals = { status: "success", action: option.action, data: option.data || {}, message: null };

                this.response.next(response);

            } else {

                if (!option.method) {
                    this.get({ params: option.params, action: option.action, path: option.path })
                } else {
                    this.post({ params: option.params, action: option.action, path: option.path, data: option.data })
                }

            }
        }

    }
    lang = {
        token: "storeLangs",
        check: () => {
            return window.localStorage.getItem(this.lang.token) ? true : false
        },
        get: () => {
            return (this.lang.check()) ? window.localStorage.getItem(this.lang.token) : "vn";
        },
        send: () => {
            // this.send({token : this.lang.token , path : "api/setlang" , params : { lang : this.translate['currentLang']}})
        },
        set: (key) => {
            window.localStorage.setItem(this.lang.token, key);
        }
    }

    getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();

        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('x-timo-devicereg', '2157388138:WEB:WEB:83:WEB:desktop:chrome');
        headers = headers.set('Access-Control-Allow-Credentials', 'true');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
        headers = headers.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
        if (this.user.token.check()) {
            headers = headers.set('token', this.user.token.get())

        }
        return headers;
    }

    post = (option: PostRequets) => {
        let path = option.prefix ? option.prefix + option.path : this.PREFIX_API_URL + option.path;
        let params = this.params(option.params);
        let headers = this.getHeaders();
        this.http.post(this.BASE_API_URL + path, option.data, {
            params, headers

        })
            .subscribe((result: any) => this.setResponse(result, option.action));
    }
    get(option: GetRequets) {
        let path = option.prefix ? option.prefix + option.path : this.PREFIX_API_URL + option.path;
        let params = this.params(option.params);
        this.http.get(this.BASE_API_URL + path, { responseType: "json", params, headers: this.getHeaders() })
            .subscribe((result: any) => this.setResponse(result, option.action));
    }
    public setResponse(result, action) {
        if (result && result.status == 'request') {
            this.router.navigate(['signin']);
        } else {
            let response = Object.assign({}, result, { action: action })
            this.response.next(response);
        }

    }
    params(paramsQuery = null) {
        let params = new HttpParams();
        if (paramsQuery) {
            for (let key in paramsQuery) {
                let value = paramsQuery[key];
                params = params.set(key, typeof value === 'object' ? JSON.stringify(value) : value);
            }
        }
        return params;
    }

}
