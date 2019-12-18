import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { InsComponent } from '../../accounts/ins/ins.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ChangepasswordComponent } from '../../accounts/changepassword/changepassword.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalsService, UsersService } from 'src/app/globals';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public connect: any;
    public language: boolean = true;
    public card: any;
    public profile: any;
    @Output('eventOpened') eventOpened: any = new EventEmitter<number>();

    logo = "https://icons-for-free.com/iconfiles/png/512/friend+human+man+member+person+profile+user+users+icon-1320168707291252637.png";

    constructor(
        public dialog: MatDialog,
        public snackBar: MatSnackBar,
        public router: Router,
        public translate: TranslateService,
        public ws: GlobalsService,
        public user: UsersService
    ) {
        this.connect = this.ws.result.subscribe(res => {
            switch (res.action) {
                case "cards":                    
                    this.card = res.data[0];
                    break;
                case "getProfile":
                    if (res['success'] = true) {
                        this.profile = res.data;
                    }
                    break;
                default:
                    break;
            }
        })
    }

    ngOnInit() {
        this.ws.get({ path: 'card-management/cards', action: 'cards' });
        this.ws.get({ path: 'user/getProfile', action: 'getProfile' })

    }
    ngOnDestroy() {
        if (this.connect) {
            this.connect.unsubscribe();
        }
    }
    onUpdate() {
        this.dialog.open(InsComponent, { width: "500px", data: { id: 0 } });
    }
    onChangePassword() {
        this.dialog.open(ChangepasswordComponent, { width: "500px", data: { id: 0 } });
    }
    logOut() {

        this.user.info.remove();
        this.user.token.remove();
        this.router.navigate(["../signin"]);
        this.snackBar.open("Đăng xuất thành công", 'Close', { duration: 5000 });
    }
    changeLanguage(language) {
        this.translate.use(language);
        this.ws.lang.set(language)
        this.translate.use(language);
    }

}
