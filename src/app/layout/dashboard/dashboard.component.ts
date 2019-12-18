import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalsService } from "../../globals";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface HistoryData {
    txnTime: string;
    txnType: string;
    timoDesc2: string;
    txnAmount: string;
    txnAmountMC: string;
    remainingAmount: string
};
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
    public connect: any;
    public accountPreview: any;
    public list: any;
    public enabled: boolean = true;
    public fm: FormGroup;
    public name_account: any;
    public displayedColumns: string[] = ['txnTime', 'txnType', 'timoDesc2', 'txnAmount', 'txnAmountMC', 'remainingAmount'];
    public dataSource: MatTableDataSource<HistoryData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    public pageType: number = 0;

    constructor(
        public dialog: MatDialog,
        public snackBar: MatSnackBar,
        public router: Router,
        public translate: TranslateService,
        private fb: FormBuilder,
        public ws: GlobalsService
    ) {
        this.connect = this.ws.result.subscribe(res => {
            switch (res.action) {
                case "getacountTransactionList":
                    this.list = res['data'].items;
                    this.dataSource = new MatTableDataSource(this.list);                    
                    setTimeout(() => {
                        this.pageType = res['data'].items.length > 0 ? 1 : -1;
                    }, 2000);
                    break;
                case "getaccountPreview":
                    this.accountPreview = res['data'].accounts;
                    break;

                default:
                    break;
            }
        })
    }

    ngOnInit() {
        this.ws.get({ path: 'user/accountPreview', action: 'getaccountPreview' })
        this.fmConfig();
    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }
    }



    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    fmConfig(item: any = { status: 1 }) {
        let config = {
            accountType: ['', [Validators.required]],
            accountNo: ['', [Validators.required]],
            fromDate: [new Date(), [Validators.required]],
            toDate: [new Date(), [Validators.required]],
        }
        this.fm = this.fb.group(config);
    };
    onItemChange(e) {
        for (let i = 0; i < this.accountPreview.length; i++) {
            if (this.accountPreview[i].accountType == this.fm.value.accountType) {
                this.fm.get('accountNo').setValue(this.accountPreview[i].no);
            }
        }
    }
    onSubmit() {
        let data = {
            "accountType": this.fm.value.accountType,
            "accountNo": this.fm.value.accountNo,
            "fromDate": new Date(this.fm.value.fromDate).toJSON().slice(0, 10).split('-').reverse().join('/'),
            "toDate": new Date(this.fm.value.toDate).toJSON().slice(0, 10).split('-').reverse().join('/'),
            "index": 0, "offset": -1
        }
        this.ws.post({ data: data, action: "getacountTransactionList", path: 'user/account/transaction/list' })
    }

}
