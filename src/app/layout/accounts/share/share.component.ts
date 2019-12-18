import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalsService } from '../../../globals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit, OnDestroy {
    public connect: any;
    constructor(
        public router: Router,
        public translate: TranslateService,
        public ws: GlobalsService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<ShareComponent>,
    ) { }

    ngOnInit() {
        // console.log(this.data);
        

    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }
    }

}
