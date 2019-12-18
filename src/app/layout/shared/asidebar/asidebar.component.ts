import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-asidebar',
    templateUrl: './asidebar.component.html',
    styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {

    public dataList = [
        { icon: "dashboard", title: "menu.dashboard", link: "layout/dashboard", tags: ['ListWorkbook', 'ListPlan'], data: [], hideToggle: true },
        {
            icon: "card_travel", title: "menu.transfers", link: "", tags: ['ListWorkbook', 'ListPlan'], hideToggle: true, data: [
                { title: "menu.in-acb", link: "layout/transfers/in-acb" },
                { title: "menu.outside-acb", link: "layout/transfers/outside-acb" },
            ]
        },
        {
            icon: "payment", title: "menu.payment", link: "", tags: ['ListWorkbook', 'ListPlan'], hideToggle: true, data: [
                { title: "menu.game", link: "layout/payment/game" },
                { title: "menu.tuition", link: "layout/payment/tuition" },
                { title: "menu.payairticket", link: "layout/payment/payairticket" },
                { title: "menu.paytraintickets", link: "layout/payment/paytraintickets" },
                { title: "menu.paybill", link: "layout/payment/paybill" },
                { title: "menu.tvfee", link: "layout/payment/tvfee" },
                { title: "menu.prepay", link: "layout/payment/prepay" },
                { title: "menu.postpaid", link: "layout/payment/postpaid" },
                { title: "menu.landline", link: "layout/payment/landline" },

            ]
        },
        {
            icon: "shopping_basket", title: "menu.service", link: "", tags: ['ListWorkbook', 'ListPlan'], hideToggle: true, data: [
                { title: "menu.openaccount", link: "layout/service/open-account" },
            ]
        },
        {
            icon: "info", title: "menu.information", link: "", tags: ['ListWorkbook', 'ListPlan'], hideToggle: true, data: [
                { title: "menu.exchange", link: "layout/info/exchange" },
                { title: "menu.interest", link: "layout/info/interest" },
                { title: "menu.pricelist", link: "layout/info/pricelist" },
            ]
        },
        {
            icon: "more_horiz", title: "menu.utilities", link: "", tags: ['ListWorkbook', 'ListPlan'], hideToggle: true, data: [
                { title: "menu.signature", link: "layout/utilities/signature" },
                { title: "menu.registration", link: "layout/utilities/registration" },
            ]
        },


    ];
    public dataText = [];
    public step = 0;
    public search = { data: [], value: '' };
    public list = [];
    constructor(
        //@Inject(WINDOW) private window: Window, 
        public router: Router,
        public translate: TranslateService,
        // public toslug: ToslugService
    ) {
        this.search.data = this.dataList;
        // this.callListMenu();
    }

    ngOnInit() {

    }
    routerLink(link) {
        if (link == '' || link == null || link == '#') {
        } else {
            this.search = { data: this.dataList, value: '' };
            this.router.navigate([link]);
        }
    }
    routerLinkMenu(link) {
        if (link == '' || link == null || link == '#') {
        } else {
            let a = window.location.href.split('//');
            let b = a[1].split('/');
            let url = a[0] + '//' + b[0] + '/' + link;
            window.open(url, '_blank');
        }
    }
    searchMenu() {
        if (this.dataText.length > 0) {
            // this.sortMenu()
        } else {
            this.translate.get("menu").subscribe(res => {
                this.translate.get('title').subscribe(response => {
                    this.dataText = Object.assign(res, response);
                    // this.sortMenu();
                });
            })
        }
    }


}
