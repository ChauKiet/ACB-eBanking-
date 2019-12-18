import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalsService } from 'src/app/globals';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

    public connect:any;

    public fm: FormGroup;

    public pageType: boolean = false;

    public isLoad: boolean = false;

    public hide = true;

    public skip:any;

    public confirm: string;

    public notMatch: boolean = true;
    public sex: any = {
        type:
            [
                { id: 1, name: 'signup.sex.1' },
                { id: 2, name: 'signup.sex.2' },
            ]
    }
    constructor(
        private fmBuilder: FormBuilder,
        public snackBar: MatSnackBar,
        public router: Router,
        public translate: TranslateService,
        public ws: GlobalsService

    ) {
        this.fm = this.fmBuilder.group({
            user_name: ['', [Validators.required]],
            contact_email: ['', [Validators.required, Validators.pattern(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)]],
            contact_phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(11), Validators.minLength(10)]],
            contact_address: ['', [Validators.required]],
            sex: [1, [Validators.required]],
            birth_date: '',
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }

    }
    changeType(type) {

        this.isLoad = true;

        setTimeout(() => {
            this.isLoad = false;
            this.pageType = type
        }, 800);
    }

    submitfm(evt) {

        if (this.fm.valid) {
            this.changeType(true)
        }

    }

    onCompare() {

        if (this.confirm != this.fm.value.password) {
            this.notMatch = true;
        } else {
            this.notMatch = false;
        }
    }
    

    onSubmit() {

        if (this.fm.valid) {

            let data = this.fm.value;
            this.changeType(true)

            // data.first_name = data.user_name.split(" ").pop().join(" ");

            // data.last_name = data.user_name.split(" ").reduce()[0];

            // this.ws.send({ token: this.token.singup.process, data: data })
            console.log(data);


        }

    }
    changeLanguage(language) {
        this.translate.use(language);
        this.ws.lang.set(language);
        this.translate.use(language);
    }

}
