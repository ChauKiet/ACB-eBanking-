import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-tuition',
    templateUrl: './tuition.component.html',
    styleUrls: ['./tuition.component.css']
})
export class TuitionComponent implements OnInit {
    public fm: FormGroup
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.fmConfig();
    }
    fmConfig(item: any = { status: 1 }) {

        let config = {

            group_schools: ['', [Validators.required]],

            schools: ['', [Validators.required]],

            id_student: ['', [Validators.required]],

            content_billing: ['', [Validators.required]]

        }
        this.fm = this.fb.group(config);
    }


}
