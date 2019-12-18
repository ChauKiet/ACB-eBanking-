import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-in-acb',
    templateUrl: './in-acb.component.html',
    styleUrls: ['./in-acb.component.css']
})
export class InAcbComponent implements OnInit, OnDestroy {
    public fm: FormGroup;
    public checked = false;
    public skip:any;
    public connect: any;
    public money_account: any = {
        type: [
            { id: 1, value: "3847037" },
            { id: 2, value: "3847038" },
            { id: 3, value: "3847039" },
            { id: 4, value: "3847036" },
            { id: 5, value: "3847035" },
            { id: 6, value: "3847034" }
        ]
    };
    public account_list: any = {
        type: [
            { id: 1, value: "" },
            { id: 2, value: "3847037" },
        ]
    };
    public list: any = {
        type:
            [
                { id: 0, name: 'transfers.fromlist' },
                { id: 1, name: 'transfers.enteraccount' },
            ]
    };
    public date_list: any = {
        type: [
            { id: 0, value: 'transfers.transfernow' },
            { id: 1, value: 'transfers.transferdate' }
        ]
    };
    public method: any = {
        type: [
            { id: 0, value: 'transfers.staticpassword' },
            { id: 1, value: 'transfers.staticpasswordsms' }
        ]
    }
    constructor(private fb: FormBuilder, ) { }

    ngOnInit() {
        this.fmConfig();
    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }
    }
    fmConfig(item: any = { status: 1 }) {

        let config = {

            id: [0 || ""],
            money_account: ['', [Validators.required]],
            beneficiary_type: [0 || ""],
            account_list: ['', [Validators.required]],
            account: ['', [Validators.required]],
            money: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            money_words: ['', [Validators.required]],
            transaction_fee: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            transaction_fee_words: ['', [Validators.required]],
            transaction_note: ['', [Validators.required]],
            reference_number: ['', [Validators.required]],
            send_email: ['', [Validators.required]],
            results_email: ['', [Validators.required]],
            transaction_now: [0 || ""],
            transaction_date: ['', [Validators.required]],
            authentication_method: ['', [Validators.required]],

        }

        this.fm = this.fb.group(config);

    }
    onSend() {
        console.log(this.checked);

    }
    onSubmit(){}

}
