import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@Component({
    selector: 'app-open-account',
    templateUrl: './open-account.component.html',
    styleUrls: ['./open-account.component.css'],
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
    }]
})
export class OpenAccountComponent implements OnInit {

    public favoriteSeason: string;

    public firstFormGroup: FormGroup;
    public secondFormGroup: FormGroup;
    public thirdFormGroup: FormGroup;
    public fourthFormGroup: FormGroup;
    public skip:any;
    // public skip:number;

    public list: any = {
        type:
            [
                { id: 1, name: 'openaccount.brother' },
                { id: 2, name: 'openaccount.sister' },
            ]
    }
    public papers: any = {
        type: [
            { id: 1, name: "openaccount.identification.1" },
            { id: 2, name: "openaccount.identification.2" },
            { id: 3, name: "openaccount.identification.3" }
        ]
    }
    public account_type: any = {
        type: [
            { id: 1, name: "openaccount.type.1" },
            { id: 2, name: "openaccount.type.2" },
            { id: 3, name: "openaccount.type.3" },
            { id: 4, name: "openaccount.type.4" },
            { id: 5, name: "openaccount.type.5" },
            { id: 6, name: "openaccount.type.6" }
        ]
    }
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            name_type: [1, Validators.required],
            firts_name: ['', Validators.required],
            last_name: ['', Validators.required],
            contact_email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
            contact_phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(11), Validators.minLength(10)]],

        });
        this.secondFormGroup = this._formBuilder.group({
            papers_type: [1, Validators.required],
            number_papers: ['', Validators.required],
            date_create: ['', Validators.required],
            address_create: ['', Validators.required],
            brithday: ['', Validators.required],
            address_brithday: ['', Validators.required],
            nationality: ['', Validators.required],
            provincial: ['', Validators.required],
            district: ['', Validators.required],
            commune: ['', Validators.required],
            addres: ['', Validators.required],
            street: ['', Validators.required],
        });
        this.thirdFormGroup = this._formBuilder.group({
            account_type: [3, Validators.required],
            inter_banking: ['', Validators.required],
            sms: ['', Validators.required],
        });
        this.call_api_districts()
    }
    onSubmit() {
        console.log((this.thirdFormGroup.value.inter_banking == true) ? "OK" : "No");
        console.log((this.thirdFormGroup.value.sms == true) ? "OK" : "No");

    }
    call_api_districts() {
        let url = "https://sandbox.vnpayment.vn/apis/danh-sach-ngan-hang/";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // Work with JSON data here
                console.log(data);

            })
            .catch(err => {
                // Do something for an error here
            });
    }
}
