import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalsService } from 'src/app/globals';
import { MatDialog } from '@angular/material';
import { ShareComponent } from '../share/share.component';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {
    public connect: any;
    public listAccount: any;
    public bankinfo: any;
    constructor(
        public router: Router,
        public translate: TranslateService,
        public ws: GlobalsService,
        public dialog: MatDialog,
    ) {
        this.connect = this.ws.result.subscribe(res => {
            switch (res.action) {
                case "getProfile":
                    if (res['success'] == true) {
                        this.listAccount = res['data'];                        
                    }
                    break;
                case "bankinfo":
                    if (res['success'] == true) {
                        this.bankinfo=res.data                        
                    }
                    break;
                default:
                    break;
            }
        })
    }

    ngOnInit() {
        this.ws.get({ path: 'user/getProfile', action: 'getProfile' });
        this.ws.get({ path: 'user/bankinfo', action: 'bankinfo' })
    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }
    }
    Onshare() {
        this.dialog.open(ShareComponent, { width: "700px", data: this.bankinfo });
    }

}
