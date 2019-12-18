import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ChallengeComponent } from '../challenge/challenge.component';
import { TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';
import * as sha512 from 'js-sha512';
import { GlobalsService, UsersService } from 'src/app/globals';
import 'clientjs';
declare let ClientJS: any;

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit, OnDestroy {

    public connect:any;

    public fmUsername: FormGroup;

    public fmPassword: FormGroup;

    public pageType: boolean = false;

    public isLoad: boolean = false;

    public hide = true;
    constructor(
        private fmBuilder: FormBuilder,
        public snackBar: MatSnackBar,
        public router: Router,
        public dialog: MatDialog,
        public translate: TranslateService,
        public http: Http,
        public ws: GlobalsService,
        public user: UsersService

    ) {
        this.fmUsername = this.fmBuilder.group({ username: ['', [Validators.required]] });

        this.fmPassword = this.fmBuilder.group({ password: ['', [Validators.required, Validators.minLength(8)]] });

        this.ws.result.subscribe(res => {
            switch (res.action) {
                case "login":
                    if (res['data'].status == "Active") {
                        this.ws.user.info.set(Object.assign(res['data']));
                        this.ws.user.token.set(res['data'].token);
                        this.snackBar.open("Đăng nhập thành công", 'Close', { duration: 5000 });

                        setTimeout(() => {
                            this.router.navigate(['/layout/dashboard']);
                            // location.reload(true);
                        });
                    }
                    else {
                        this.snackBar.open(res.message, 'Close', { duration: 5000 });
                    }
                    break;

                default:
                    break;
            }
        })

    }

    ngOnInit() {
        if (this.user.info && this.user.token) {
            this.user.info.remove();
            this.user.token.remove();
        }
    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }

    }
    changeType(type) {

        this.isLoad = true;

        setTimeout(() => { this.isLoad = false; this.pageType = type }, 800);
    }

    submitfmUsername(evt) {
        if (this.fmUsername.valid) { this.changeType(true) }
    }
    onSubmit(evt) {
        // var client = new ClientJS();
        // console.log("CLIENT", client.getBrowser(),client. getFingerprint());

        let data = {
            lang: this.translate.store.currentLang,
            password: sha512.sha512(this.fmPassword.value.password),
            username: this.fmUsername.value.username,
        }
        this.ws.post({ data: data, action: "login", path: 'login' })
    }
    onForgot() {
        this.dialog.open(ChallengeComponent, { width: "500px", });

    }
    changeLanguage(language) {
        this.translate.use(language);
        this.ws.lang.set(language);
        this.translate.use(language);
    }
}
